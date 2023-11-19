namespace EmploySity.Models;

/// <summary>
/// Университет
/// </summary>
public class University
{
    /// <summary>
    /// Идентификатор
    /// </summary>
    public int Id { get; set; }
    
    /// <summary>
    /// Название университета
    /// </summary>
    public string Name { get; set; }
    
    /// <summary>
    /// Страна университета
    /// </summary>
    public string Country { get; set; }
    
    /// <summary>
    /// Путь к изображению лого университета
    /// </summary>
    public string UnversityLogoPicUrl { get; set; }
    
    /// <summary>
    /// Путь к изображению страны университета
    /// </summary>
    public string CountryPicUrl { get; set; }
    
    public double CoordinateX { get; set; }
    
    public double CoordinateY { get; set; }
}