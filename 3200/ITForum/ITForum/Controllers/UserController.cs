using ITForum.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ITForum.Controllers
{
    public class UserController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public UserController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }

        public async Task<IActionResult> Table()
        {
            List<User> users = await _questionDbContext.Users.ToListAsync();
            return View(users);
        }
    }
}
