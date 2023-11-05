using ITForum.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ITForum.ViewModels
{
    public class CreateOrderItemViewModel
    {
        public OrderItem OrderItem { get; set; } = default!;
        public List<SelectListItem> QuestionSelectList { get; set; } = default!;
        public List<SelectListItem> AnswerSelectList { get; set; } = default!;
    }
}
