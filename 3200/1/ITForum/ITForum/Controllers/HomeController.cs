using Microsoft.AspNetCore.Mvc;

namespace ITForum.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
