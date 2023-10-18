using EmploySity.Models.Filters;
using EmploySity.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EmploySity.Controllers;

[ApiController]
[Route("[controller]")]
public class UniversityController : ControllerBase
{
    private readonly IUniversityService _universityService;

    public UniversityController(IUniversityService universityService)
    {
        _universityService = universityService;
    }

    [HttpGet("GetUniversities")]
    public IActionResult GetUniversities()
    {
        var result = _universityService.GetUniversities();
        return Ok(result);
    }

    [HttpGet("GetUniversitiesByFilter")]
    public IActionResult GetUniversities(UniversityFilter filter)
    {
        var result = _universityService.GetUniversities(filter);
        return Ok(result);
    }
}