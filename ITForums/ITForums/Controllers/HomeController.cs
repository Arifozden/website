using Microsoft.AspNetCore.Mvc;

namespace ITForums.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
