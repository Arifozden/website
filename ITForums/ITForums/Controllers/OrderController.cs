using ITForums.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITForums.ViewModels;
using Microsoft.AspNetCore.Mvc.Rendering;
using ITForums.DAL;

namespace ITForums.Controllers
{
    public class OrderController : Controller
    {
        private readonly QuestionDbContext _questionDbContext;

        public OrderController(QuestionDbContext questionDbContext)
        {
            _questionDbContext = questionDbContext;
        }
        public async Task<IActionResult> Table()
        {
            List<Order> orders = await _questionDbContext.Orders.ToListAsync();
            return View(orders);
        }

        [HttpGet]
        public async Task<IActionResult> CreateOrderQuestion()
        {
            var questions = await _questionDbContext.Questions.ToListAsync();
            var orders = await _questionDbContext.Orders.ToListAsync();
            var createOrderQuestionViewModel = new CreateOrderQuestionViewModel
            {
                OrderQuestion = new OrderQuestion(),

                QuestionSelectList = questions.Select(question => new SelectListItem
                {
                    Value = question.Id.ToString(),
                    Text = question.Id.ToString() + ": " + question.Title
                }).ToList(),

                OrderSelectList = orders.Select(order => new SelectListItem
                {
                    Value = order.OrderId.ToString(),
                    Text = "Order " + order.OrderId.ToString() + ", Date: " + order.OrderDate + ", Customer: " +
                           order.Customer.Name
                }).ToList(),
            };
            return View(createOrderQuestionViewModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrderQuestion(OrderQuestion orderQuestion)
        {
            try
            {
                var newQuestion = _questionDbContext.Questions.Find(orderQuestion.QuestionId);
                var newOrder = _questionDbContext.Orders.Find(orderQuestion.OrderId);
                if (newQuestion == null || newOrder == null)
                {
                    return BadRequest("Question or Order not found!");
                }

                var newOrderQuestion = new OrderQuestion
                {
                    QuestionId = orderQuestion.QuestionId,
                    Question = newQuestion,
                    Quantity = orderQuestion.Quantity,
                    OrderId = orderQuestion.OrderId,
                    Order = newOrder,
                };
                newOrderQuestion.OrderQuestionPrice = orderQuestion.Quantity * newOrderQuestion.Question.Answer;

                _questionDbContext.OrderQuestions.Add(newOrderQuestion);
                await _questionDbContext.SaveChangesAsync();
                return RedirectToAction(nameof(Table));
            }
            catch
            {
                return BadRequest("OrderQuestion creation failed!");
            }
        }
    }
}
