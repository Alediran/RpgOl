using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RpgOl.Data;
using Volo.Abp.DependencyInjection;

namespace RpgOl.EntityFrameworkCore;

public class EntityFrameworkCoreRpgOlDbSchemaMigrator(IServiceProvider serviceProvider) : IRpgOlDbSchemaMigrator, ITransientDependency
{
    public async Task MigrateAsync()
    {
        /* We intentionally resolving the RpgOlDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await serviceProvider
            .GetRequiredService<RpgOlDbContext>()
            .Database
            .MigrateAsync();
    }
}
