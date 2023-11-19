namespace EmploySity.Models;

/// <summary>
/// Место работы
/// </summary>
public class WorkPlace
{
    /// <summary>
    /// Идентификатор
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Координата x
    /// </summary>
    public double CoordinateX { get; set; }
    
    /// <summary>
    ///  Координата y
    /// </summary>
    public double CoordinateY { get; set; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; set; } = null!;

    /// <summary>
    /// Условия
    /// </summary>
    public string Conditions { get; set; } = null!;

    /// <summary>
    /// Описание (вся остальная информация)
    /// </summary>
    public string Description { get; set; } = null!;
}