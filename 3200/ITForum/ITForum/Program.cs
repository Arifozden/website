using ITForum.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = 
        Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

builder.Services.AddDbContext<QuestionDbContext>(options => {
    options.UseSqlite(
        builder.Configuration["ConnectionStrings:QuestionDbContextConnection"]);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    DBInit.Seed(app);
}
app.UseStaticFiles();

app.MapDefaultControllerRoute();

app.Run();
