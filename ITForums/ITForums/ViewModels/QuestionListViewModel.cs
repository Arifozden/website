using System;
using System.Collections.Generic;
using ITForums.Models;

namespace ITForums.ViewModels
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