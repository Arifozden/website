using ITForums.Models;
using ITForums.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ITForums.Controllers
{
    public class QuestionController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public QuestionController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }

        public async Task<IActionResult> Table()
        {
            List<Question> questions = await _questionDbContext.Questions.ToListAsync();
            var questionListViewModel = new QuestionListViewModel(questions, "Table");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> Grid()
        {
            List<Question> questions = await _questionDbContext.Questions.ToListAsync();
            var questionListViewModel = new QuestionListViewModel(questions, "Grid");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> Details(int id)
        {
            //List<Question> questions = _questionDbContext.Questions.ToList(); ;
            var question = await _questionDbContext.Questions.FirstOrDefaultAsync(x => x.Id == id);
            if (question == null)
                return NotFound();
            return View(question);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Question question)
        {
            if (ModelState.IsValid)
            {
                _questionDbContext.Questions.Add(question);
                await _questionDbContext.SaveChangesAsync();
                return RedirectToAction(nameof(Table));
            }
            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var question = await _questionDbContext.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }
            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> Update(Question question)
        {
            if (ModelState.IsValid)
            {
                _questionDbContext.Questions.Update(question);
                await _questionDbContext.SaveChangesAsync();
                return RedirectToAction(nameof(Table));
            }
            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var question = await _questionDbContext.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }
            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var question = await _questionDbContext.Questions.FindAsync(id);
            if (question==null)
            {
                return NotFound();
            }
            _questionDbContext.Questions.Remove(question);
            await _questionDbContext.SaveChangesAsync();
            return RedirectToAction(nameof(Table));
        }
    }
}
