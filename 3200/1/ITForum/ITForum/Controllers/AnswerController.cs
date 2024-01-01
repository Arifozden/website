using ITForum.Models;
using ITForum.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace ITForum.Controllers
{
    public class AnswerController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public AnswerController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }

        public async Task<IActionResult> Table()
        {
            List<Answer> answers = await _questionDbContext.Answers.ToListAsync();
            return View(answers);
        }

        [HttpGet]
        public async Task<IActionResult> CreateOrderItem()
        {
            var questions = await _questionDbContext.Questions.ToListAsync();
            var answers = await _questionDbContext.Answers.ToListAsync();
            var createOrderItemViewModel = new CreateOrderItemViewModel
            {
                OrderItem = new OrderItem(),

                QuestionSelectList = questions.Select(question => new SelectListItem
                {
                    Value = question.QuestionId.ToString(),
                    Text = question.QuestionId.ToString() + ": " + question.Title
                }).ToList(),

                AnswerSelectList = answers.Select(answer => new SelectListItem
                {
                    Value = answer.AnswerId.ToString(),
                    Text = answer.AnswerId.ToString() + "date: " + answer.AnswerDate + " user : " + answer.User
                }).ToList(),
            };
            return View(createOrderItemViewModel);
        }


        [HttpPost]
        public async Task<IActionResult> CreateNewAnswer(OrderItem orderItem)
        {
            try
            {
                var newQuestion = _questionDbContext.Questions.Find(orderItem.Question);
                var newAnswer = _questionDbContext.Answers.Find(orderItem.AnswerId);

                if (newQuestion == null || newAnswer == null)
                {
                    return BadRequest("Question or Answer not found");
                }

                var newOrderItem = new OrderItem
                {
                    QuestionId = orderItem.QuestionId,
                    Question = newQuestion,
                    AntallAnswer = orderItem.AntallAnswer,
                    AnswerId = orderItem.AnswerId,
                    Answer = newAnswer
                };
                _questionDbContext.OrderItems.Add(newOrderItem);
                await _questionDbContext.SaveChangesAsync();
                return RedirectToAction(nameof(Table));
            }
            catch
            {
                return BadRequest("Order Item creation failed!");
            }
        }
    }
}
