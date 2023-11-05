using ITForum.Models;
using ITForum.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ITForum.Controllers
{
    public class QuestionController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public QuestionController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }

        public List<Answer> AnswerConsole()
        {
            return _questionDbContext.Answers.ToList();
        }

        public async Task<IActionResult> Question()
        {
            List<Question> questions = await _questionDbContext.Questions.ToListAsync();
            var questionListViewModel = new QuestionListViewModel(questions, "Question");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> QuestionGrid()
        {
            List<Question> questions = await _questionDbContext.Questions.ToListAsync();
            var questionListViewModel = new QuestionListViewModel(questions, "QuestionGrid");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> Details(int id)
        {
            //List<Question> questions = _questionDbContext.Questions.ToList();
            var question = await _questionDbContext.Questions.FirstOrDefaultAsync(i => i.QuestionId == id);
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
                return RedirectToAction(nameof(Question));
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
                return RedirectToAction(nameof(Question));
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
            return RedirectToAction(nameof(Question));
        }
    }
}
