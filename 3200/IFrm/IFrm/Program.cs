using IFrm.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("QuestionDbContextConnection") ?? throw new InvalidOperationException("Connection string 'QuestionDbContextConnection' not found.");

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<QuestionDbContext>(options =>
{
    options.UseSqlite(builder.Configuration["ConnectionStrings:QuestionDbContextConnection"]);
});

builder.Services.AddDefaultIdentity<IdentityUser>()
    .AddEntityFrameworkStores<QuestionDbContext>();

builder.Services.AddRazorPages();
builder.Services.AddSession();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseStaticFiles();

app.UseSession();
app.UseAuthentication();
app.UseAuthorization();

app.MapDefaultControllerRoute();

app.MapRazorPages();

app.Run();
