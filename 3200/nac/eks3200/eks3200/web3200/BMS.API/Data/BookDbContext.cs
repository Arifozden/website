using BMS.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BMS.API.Data
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
    }



}
