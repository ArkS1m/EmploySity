using EmploySity.Data.Implementations;
using EmploySity.Models;
using EmploySity.Repositories.Interfaces;

namespace EmploySity.Repositories.Implementations;

public class WorkPlaceRepository : Repository<WorkPlace>, IWorkPlaceRepository
{
    public WorkPlaceRepository(ApplicationDbContext context) : base(context)
    {
    }
}