using EmploySity.Data.Implementations;
using EmploySity.Models;
using EmploySity.Repositories.Interfaces;

namespace EmploySity.Repositories.Implementations;

public class UniversityRepository : Repository<University>, IUniversityRepository
{
    public UniversityRepository(ApplicationDbContext context) : base(context)
    {
    }
}