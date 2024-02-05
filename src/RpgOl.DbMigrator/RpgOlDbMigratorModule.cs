using Microsoft.Extensions.DependencyInjection;
using RpgOl.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace RpgOl.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(RpgOlEntityFrameworkCoreModule),
    typeof(RpgOlApplicationContractsModule)
 )]
public class RpgOlDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);   
    }
}
