namespace EmploySity.Data.Interfaces;

public interface IRepository<TEntity>
{
    Task<List<TEntity>> GetAllAsync();
    
    Task<TEntity?> GetByIdAsync(Guid id);

    IQueryable<TEntity> GetQueryable();

    void Insert(TEntity entity);
    
    void Update(TEntity entity);
    
    void Remove(TEntity entity);

    Task SaveChangesAsync();
}