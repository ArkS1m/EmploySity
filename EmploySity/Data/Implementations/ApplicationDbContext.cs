using EmploySity.Models;
using Microsoft.EntityFrameworkCore;

namespace EmploySity.Data.Implementations;

public class ApplicationDbContext : DbContext
{
    public DbSet<University> University { get; set; } = null!;
    public DbSet<WorkPlace> WorkPlace { get; set; } = null!;
    public DbSet<UniversityWorkPlace> UniversityWorkPlace { get; set; } = null!;
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}