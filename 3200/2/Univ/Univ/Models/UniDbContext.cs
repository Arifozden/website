using Microsoft.EntityFrameworkCore;

namespace Univ.Models
{
    public class UniDbContext : DbContext
    {
        public UniDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
