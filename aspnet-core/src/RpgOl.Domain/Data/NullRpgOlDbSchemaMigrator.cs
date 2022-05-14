using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace RpgOl.Data;

/* This is used if database provider does't define
 * IRpgOlDbSchemaMigrator implementation.
 */
public class NullRpgOlDbSchemaMigrator : IRpgOlDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
