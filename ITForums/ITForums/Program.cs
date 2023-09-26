using ITForums.DAL;
using Microsoft.EntityFrameworkCore;
using ITForums.Models;
using Serilog;
using Serilog.Events;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

builder.Services.AddDbContext<QuestionDbContext>(options =>
{
    options.UseSqlite(builder.Configuration["ConnectionStrings:QuestionDbContextConnection"]);
});

builder.Services.AddScoped<IQuestionRepository, QuestionRepository>();

var loggerConfiguration = new LoggerConfiguration()
    .MinimumLevel.Information() //levels: Trace<Information<Warning<Error<Fatal
    .WriteTo.File($"Logs/app_{DateTime.Now:yyyyMMdd_HHmmss}.log");

loggerConfiguration.Filter.ByExcluding(e => e.Properties.TryGetValue("SourceContext", out var value) &&
                                            e.Level == LogEventLevel.Information &&
                                            e.MessageTemplate.Text.Contains("Executed DbCommand"));

var logger = loggerConfiguration.CreateLogger();
builder.Logging.AddSerilog(logger);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    DBInit.Seed(app);
}

app.UseStaticFiles();

app.UseAuthentication();

app.MapDefaultControllerRoute();

app.Run();
