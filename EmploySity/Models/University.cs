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
    public string universityLogoPicUrl { get; set; }
    
    /// <summary>
    /// Путь к изображению страны университета
    /// </summary>
    public string CountryPicUrl { get; set; }
    
    /// <summary>
    /// Координата университета по оси X
    /// </summary>
    public double CoordinateX { get; set; }
    
    /// <summary>
    /// Координата университета по оси Y
    /// </summary>
    public double CoordinateY { get; set; }
}