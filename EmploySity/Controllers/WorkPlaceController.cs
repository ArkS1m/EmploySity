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

    [HttpGet("GetWorkPlaces")]
    public IActionResult GetWorkPlaces()
    {
        var result = _workPlaceService.GetWorkPlaces();
        return Ok(result);
    }
}