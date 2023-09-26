using ITForums.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ITForums.ViewModels
{
    public class CreateOrderQuestionViewModel
    {
        public OrderQuestion OrderQuestion { get; set; } = default!;
        public List<SelectListItem> QuestionSelectList { get; set; } = default!;
        public List<SelectListItem> OrderSelectList { get; set; } = default!;
    }
}
