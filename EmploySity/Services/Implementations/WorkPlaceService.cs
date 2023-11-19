using EmploySity.Models;
using EmploySity.Repositories.Interfaces;
using EmploySity.Services.Interfaces;

namespace EmploySity.Services.Implementations;

public class WorkPlaceService : IWorkPlaceService
{
    private readonly IWorkPlaceRepository _workPlaceRepository;
    
    public WorkPlaceService(IWorkPlaceRepository workPlaceRepository)
    {
        _workPlaceRepository = workPlaceRepository;
    }

    public List<WorkPlace> GetWorkPlaces()
    {
        var result = _workPlaceRepository.GetAllAsync();
        return result.Result;
    }
}