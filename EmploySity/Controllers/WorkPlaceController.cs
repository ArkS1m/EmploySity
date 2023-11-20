using EmploySity.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EmploySity.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WorkPlaceController : ControllerBase
{
    private readonly IWorkPlaceService _workPlaceService;

    public WorkPlaceController(IWorkPlaceService workPlaceService)
    {
        _workPlaceService = workPlaceService;
    }

    [HttpGet("GetWorkPlacesByUniversityId/{universityId}")]
    public IActionResult GetWorkPlaces(int universityId)
    {
        var result = _workPlaceService.GetWorkPlacesByUniversityId(universityId);
        return Ok(result);
    }
}