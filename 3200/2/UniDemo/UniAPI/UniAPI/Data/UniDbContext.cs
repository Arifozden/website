using Microsoft.EntityFrameworkCore;
using UniAPI.Models;

namespace UniAPI.Data
{
    public class UniDbContext : DbContext
    {
        public UniDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Student> Students { get; set; }
    }
}
