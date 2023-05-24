using Microsoft.EntityFrameworkCore;

namespace FOLYFOOD.Entitys
{
    public class Context: DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Decentralization> Decentralizations { get; set; }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure default value for CreatedAt and UpdateAt to be the current UTC time of the database
            modelBuilder.Entity<Account>()
                .Property(a => a.CreatedAt)
                .HasDefaultValue(DateTime.UtcNow);
            modelBuilder.Entity<Account>()
                .Property(a => a.UpdateAt)
                .HasDefaultValue(DateTime.UtcNow);

            modelBuilder.Entity<Decentralization>()
                .Property(d => d.CreatedAt)
                .HasDefaultValue(DateTime.UtcNow);
            modelBuilder.Entity<Decentralization>()
                .Property(d => d.UpdateAt)
                .HasDefaultValue(DateTime.UtcNow);

            modelBuilder.Entity<User>()
               .Property(d => d.CreatedAt)
               .HasDefaultValue(DateTime.UtcNow);
            modelBuilder.Entity<User>()
                .Property(d => d.UpdatedAt)
                .HasDefaultValue(DateTime.UtcNow);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-NTJ1ROJ; Database=poly_food; integrated security=sspi;TrustServerCertificate=True");
        }
    }
}
