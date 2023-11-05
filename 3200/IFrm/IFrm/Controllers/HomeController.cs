using Microsoft.AspNetCore.Mvc;

namespace IFrm.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
