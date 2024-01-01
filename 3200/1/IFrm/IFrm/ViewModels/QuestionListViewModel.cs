using IFrm.Models;

namespace IFrm.ViewModels
{
    public class QuestionListViewModel
    {
        public IEnumerable<Question> Questions;
        public string? CurrentViewName;

        public QuestionListViewModel(IEnumerable<Question> questions, string? currentViewName)
        {
            Questions = questions;
            CurrentViewName = currentViewName;
        }
    }
}
