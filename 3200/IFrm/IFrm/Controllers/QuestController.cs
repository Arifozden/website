using IFrm.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IFrm.Controllers
{
    public class QuestController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public QuestController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
