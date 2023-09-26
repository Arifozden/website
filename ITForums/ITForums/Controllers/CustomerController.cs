using ITForums.DAL;
using ITForums.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ITForums.Controllers
{
    public class CustomerController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public CustomerController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }
        public async Task<IActionResult> Table ()
        {
            List<Customer> customers = await _questionDbContext.Customers.ToListAsync();
            return View(customers);
        }
    }
}
