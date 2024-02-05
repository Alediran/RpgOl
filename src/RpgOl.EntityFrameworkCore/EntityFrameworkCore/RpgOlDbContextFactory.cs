using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace RpgOl.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class RpgOlDbContextFactory : IDesignTimeDbContextFactory<RpgOlDbContext>
{
    public RpgOlDbContext CreateDbContext(string[] args)
    {
        RpgOlEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<RpgOlDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"), 
            x => x.MigrationsAssembly("RpgOl.DbMigrator"));

        return new RpgOlDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../RpgOl.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
