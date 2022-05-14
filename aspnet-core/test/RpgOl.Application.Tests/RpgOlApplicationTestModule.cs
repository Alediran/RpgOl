using Volo.Abp.Modularity;

namespace RpgOl;

[DependsOn(
    typeof(RpgOlApplicationModule),
    typeof(RpgOlDomainTestModule)
    )]
public class RpgOlApplicationTestModule : AbpModule
{

}
