using Microsoft.EntityFrameworkCore;
using ITForums.Models;

namespace ITForums.DAL;

public class QuestionRepository : IQuestionRepository
{
    private readonly QuestionDbContext _db;
    private readonly ILogger<QuestionRepository> _logger;

    public QuestionRepository(QuestionDbContext db, ILogger<QuestionRepository> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<IEnumerable<Question>?> GetAll()
    {
        try
        {
            return await _db.Questions.ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("[QuestionRepository] questions ToListAsync() failed when GetAll(), " +
                             "error message: {e}", e.Message);
            return null;
        }
        
    }

    public async Task<Question?> GetQuestionById(int id)
    {
        try
        {
            return await _db.Questions.FindAsync(id);
        }
        catch (Exception e)
        {
            _logger.LogError("[QuestionRepository] question FindAsync(id) failed when GetItemById for" +
                             "QuestionId {QuestionId:0000}, error message: {e}",id,e.Message);
            return null;
        }
    }

    public async Task <bool> Create(Question question)
    {
        try
        {
            _db.Questions.Add(question);
            await _db.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            _logger.LogError("[QuestionRepository] question creation failed for question {@question}," +
                             "error message: {e}", question,e.Message);
            return false;
        }
        
    }

    public async Task <bool> Update(Question question)
    {
        try
        {
            _db.Questions.Update(question);
            await _db.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            _logger.LogError("[QuestionRepository] question FindAsync(id) failed when updating the" +
                             "QuestionId {QuestionId:0000}, error message: {e}", question, e.Message);
            return false;
        }
        
    }

    public async Task <bool> Delete(int id)
    {
        try
        {
            var question = await _db.Questions.FindAsync(id);
            if (question == null)
            {
                _logger.LogError("[QuestionRepository] question not found for the QuestionId {QuestionId:0000}",id);
                return false;
            }

            _db.Questions.Remove(question);
            await _db.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            _logger.LogError("[QuestionRepository] question deletion failed for the QuestionId {QuestionId:0000}" +
                             ",error message: {e}",id,e.Message);
            return false;
        }
    }
}