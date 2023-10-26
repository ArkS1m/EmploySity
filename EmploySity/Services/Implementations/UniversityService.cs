using EmploySity.Models;
using EmploySity.Models.Filters;
using EmploySity.Repositories.Interfaces;
using EmploySity.Services.Interfaces;

namespace EmploySity.Services.Implementations;

public class UniversityService : IUniversityService
{
    private readonly IUniversityRepository _universityRepository;
    
    public UniversityService(IUniversityRepository universityRepository)
    {
        _universityRepository = universityRepository;
    }

    public List<University> GetUniversities()
    {
        var result = _universityRepository.GetAllAsync();
        return result.Result;
    }

    public List<University> GetUniversities(UniversityFilter filter)
    {
        var result = _universityRepository
            .GetAllAsync()
            .Result;

        if (filter.IsCountrySet)
        {
            result = result
                .Where(x => x.Country == filter.Country)
                .ToList();
        }
        
        return result;
    }
}