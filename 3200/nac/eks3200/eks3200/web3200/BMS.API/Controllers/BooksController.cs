using BMS.API.Data;
using BMS.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BMS.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class BooksController : Controller
    {
        private readonly BookDbContext _dbContext;
        public BooksController(BookDbContext dbContext)
        {
           this._dbContext = dbContext; 
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await _dbContext.Books.ToListAsync();
            return Ok(books);
        }
        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            book.Id = Guid.NewGuid();
            await _dbContext.Books.AddAsync(book);
            await _dbContext.SaveChangesAsync();
            return Ok(book);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult>GetBook(Guid id)
        {
            var book = await _dbContext.Books.FirstOrDefaultAsync(x => x.Id == id);

            if(book == null)
                return NotFound();
            return Ok(book);
            
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateBook([FromRoute] Guid id, Book updateBookRequest)
        {
            var book = await _dbContext.Books.FindAsync(id);

            if(book == null)
                return NotFound();

            book.Title = updateBookRequest.Title;
            book.Author = updateBookRequest.Author;
            book.Price = updateBookRequest.Price;
            book.PublishedAt = updateBookRequest.PublishedAt;

            await _dbContext.SaveChangesAsync();
            
            return Ok(book);

        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteBook(Guid id)
        {
            var book = await _dbContext.Books.FindAsync(id);

            if (book == null)
                return NotFound();

            _dbContext.Books.Remove(book);
            await _dbContext.SaveChangesAsync();
            return Ok(book);
        }

    }
}
