using System.Security.Cryptography.X509Certificates;
using ITForum.Models;

namespace ITForum.ViewModels
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
