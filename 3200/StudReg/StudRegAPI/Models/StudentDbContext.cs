using Microsoft.EntityFrameworkCore;

namespace StudRegAPI.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) 
        {

        }

        public DbSet<StudentModel> Students { get; set; }
    }
}
