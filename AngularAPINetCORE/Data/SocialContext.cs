using AngularAPINetCORE.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularAPINetCORE.Data
{
    public class SocialContext:DbContext
    {
        public SocialContext(DbContextOptions<SocialContext> options):base(options)
        {
                
        }

        public DbSet<Product> Products { get; set; }
    }
}
