using IFrm.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IFrm.Controllers
{
    public class UserController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public UserController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }
        public async Task<IActionResult> Index()
        {
            List<User> users = await _questionDbContext.Users.ToListAsync();
            return View(users);
        }
    }
}
