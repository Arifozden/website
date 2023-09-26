using ITForums.DAL;
using ITForums.Models;
using ITForums.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ITForums.Controllers
{
    public class QuestionController : Controller
    {
        private readonly IQuestionRepository _questionRepository;
        private readonly ILogger<QuestionController> _logger;

        public QuestionController(IQuestionRepository questionRepository, ILogger<QuestionController> logger)
        {
            _questionRepository = questionRepository;
            _logger = logger;
        }

        public async Task<IActionResult> Table()
        {
            var questions = await _questionRepository.GetAll();
            if (questions == null)
            {
                _logger.LogError("[QuestionController] Question list not found while executing _questionRepository" +
                                 ".GetAll()");
                return NotFound("Question list not found");
            }
            var questionListViewModel = new QuestionListViewModel(questions, "Table");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> Grid()
        {
            var questions = await _questionRepository.GetAll();
            if (questions == null)
            {
                _logger.LogError("[QuestionController] Question list not found while executing _questionRepository" +
                                 ".GetAll()");
                return NotFound("Question list not found");
            }
            var questionListViewModel = new QuestionListViewModel(questions, "Grid");
            return View(questionListViewModel);
        }

        public async Task<IActionResult> Details(int id)
        {
            //List<Question> questions = _questionDbContext.Questions.ToList(); ;
            var question = await _questionRepository.GetQuestionById(id);
            if (question == null)
            {
                _logger.LogError("[QuestionController] Question not found for the QuestionId" +
                                 " {QuestionId:0000}",id);
                return NotFound("Question  not found for the QuestionId");
            }
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
                bool returnOk = await _questionRepository.Create(question);
                if(returnOk) return RedirectToAction(nameof(Table));
            }
            _logger.LogWarning("[QuestionController] Question creation failed {@question}", question);
            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var question = await _questionRepository.GetQuestionById(id);
            if (question == null)
            {
                _logger.LogError("[QuestionController] Question not found when updating the QuestionId {QuestionId:0000}",id);
                return BadRequest("Question not found for the QuestionId");
            }
            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> Update(Question question)
        {
            if (ModelState.IsValid)
            {
               bool returnOk = await _questionRepository.Update(question);
               if(returnOk) return RedirectToAction(nameof(Table));
            }
            _logger.LogWarning("[QuestionController] Question update failed {@question}", question);
            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var question = await _questionRepository.GetQuestionById(id);
            if (question == null)
            {
                _logger.LogError("[QuestionController] Question not found for the QuestionId {QuestionId:0000}", id);
                return BadRequest("Question not found for the QuestionId");
            }
            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            bool returnOk = await _questionRepository.Delete(id);
            if (!returnOk)
            {
                _logger.LogError("[QuestionController] Question deletion failed for the QuestionId {QuestionId:0000}",id);
                return BadRequest("Question deletion failed");
            }
            return RedirectToAction(nameof(Table));
        }
    }
}
