using EmploySity.Models;
using EmploySity.Models.Filters;

namespace EmploySity.Services.Interfaces;

public interface IUniversityService
{
    public List<University> GetUniversities();
    
    public List<University> GetUniversities(UniversityFilter filter);
}