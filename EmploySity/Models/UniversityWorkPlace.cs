namespace EmploySity.Models;

/// <summary>
/// Связка Университет - Рабочее место
/// </summary>
public class UniversityWorkPlace
{
    /// <summary>
    /// Идентификатор
    /// </summary>
    public int Id { get; set; }
    
    /// <summary>
    /// Идентификатор университета
    /// </summary>
    public int UniversityId { get; set; }
    
    /// <summary>
    /// Идентификатор рабочего места
    /// </summary>
    public int WorkPlaceId { get; set; }
}