using EmploySity.Data.Interfaces;
using EmploySity.Models;

namespace EmploySity.Repositories.Interfaces;

public interface IWorkPlaceRepository : IRepository<WorkPlace>
{
    /// <summary>
    /// Получить список рабочих мест по идентификатору университета
    /// </summary>
    /// <param name="universityId">Идентификатор университета</param>
    /// <returns>Список рабочих мест</returns>
    List<WorkPlace> GetWorkPlacesByUniversity(int universityId);
}