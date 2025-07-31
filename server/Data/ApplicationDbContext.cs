using Microsoft.EntityFrameworkCore;

namespace server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Add your DbSets here, for example:
        // public DbSet<Movie> Movies { get; set; }
        // public DbSet<Review> Reviews { get; set; }
    }
}