﻿using EmploySity.Models;

namespace EmploySity.Services.Interfaces;

public interface IWorkPlaceService
{
    public List<WorkPlace> GetWorkPlacesByUniversityId(int universityId);
}