namespace EmploySity.Models.Filters;

public class UniversityFilter
{
    public string Country { get; set; }

    public bool IsCountrySet => !string.IsNullOrEmpty(Country);
}