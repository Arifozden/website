using IFrm.Models;
using IFrm.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IFrm.Controllers
{
    public class QuestionController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public QuestionController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }
        public async Task<IActionResult> Index()
        {
            List<Question> questions = await _questionDbContext.Questions.ToListAsync();
            var questionListViewModel = new QuestionListViewModel(questions, "Index");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> Details(int id)
        {
            //List<Question> questions = _questionDbContext.Questions.ToList();
            var question = await _questionDbContext.Questions.FirstOrDefaultAsync(q => q.Id == id);
            if (question == null) return NotFound();
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
                return RedirectToAction(nameof(Index));
            }
            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var question = await _questionDbContext.Questions.FindAsync(id);
            if (question == null) return NotFound();
            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Question question)
        {
            if (ModelState.IsValid)
            {
                _questionDbContext.Questions.Update(question);
                await _questionDbContext.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var question = await _questionDbContext.Questions.FindAsync(id);
            if (question == null) return NotFound();
            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var question = await _questionDbContext.Questions.FindAsync(id);
            if (question == null) return NotFound();
            _questionDbContext.Questions.Remove(question);
            await _questionDbContext.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
