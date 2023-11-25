using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RpgOl.Data;
using Serilog;
using Volo.Abp;

namespace RpgOl.DbMigrator;

public class DbMigratorHostedService(IHostApplicationLifetime hostApplicationLifetime, IConfiguration configuration) : IHostedService
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var application = await AbpApplicationFactory.CreateAsync<RpgOlDbMigratorModule>(options =>
        {
            options.Services.ReplaceConfiguration(configuration);
            options.UseAutofac();
            options.Services.AddLogging(c => c.AddSerilog());
        });

        await application.InitializeAsync();

        await application
            .ServiceProvider
            .GetRequiredService<RpgOlDbMigrationService>()
            .MigrateAsync();

        await application.ShutdownAsync();

        hostApplicationLifetime.StopApplication();
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
