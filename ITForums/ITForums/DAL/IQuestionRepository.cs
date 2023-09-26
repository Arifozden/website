using ITForums.Models;

namespace ITForums.DAL
{
    public interface IQuestionRepository
    {
        Task<IEnumerable<Question>?> GetAll();
        Task<Question?> GetQuestionById (int id);
        Task <bool> Create (Question question);
        Task <bool> Update (Question question);
        Task <bool> Delete (int id);
     }
}
