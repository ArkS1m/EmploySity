using EmploySity.Data.Implementations;
using EmploySity.Data.Interfaces;
using EmploySity.Repositories.Implementations;
using EmploySity.Repositories.Interfaces;
using EmploySity.Services.Implementations;
using EmploySity.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EmploySity;

public static class DependencyInjection
{
    public static IServiceCollection AddServices(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options => 
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IUniversityRepository, UniversityRepository>();
        services.AddScoped<IUniversityService, UniversityService>();
        services.AddScoped<IWorkPlaceRepository, WorkPlaceRepository>();
        services.AddScoped<IWorkPlaceService, WorkPlaceService>();
        
        return services;
    }
}