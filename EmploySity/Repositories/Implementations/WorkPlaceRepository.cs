using EmploySity.Data.Implementations;
using EmploySity.Models;
using EmploySity.Repositories.Interfaces;

namespace EmploySity.Repositories.Implementations;

public class WorkPlaceRepository : Repository<WorkPlace>, IWorkPlaceRepository
{
    private readonly ApplicationDbContext _context;
    
    public WorkPlaceRepository(ApplicationDbContext context) : base(context)
    {
        _context = context;
    }

    /// <inheritdoc />
    public List<WorkPlace> GetWorkPlacesByUniversity(int universityId)
    {
        return _context.WorkPlace
            .Join(
                _context.UniversityWorkPlace,
                x => x.Id,
                x => x.WorkPlaceId,
                (wp, uwp) => new
                {
                    WorkPlace = wp,
                    UniversityId = uwp.UniversityId
                }
            )
            .Where(workPlaceInfo => workPlaceInfo.UniversityId == universityId)
            .Select(workPlaceInfo => workPlaceInfo.WorkPlace)
            .ToList();
    }
}