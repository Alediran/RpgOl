using RpgOl.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace RpgOl;

[DependsOn(
    typeof(RpgOlEntityFrameworkCoreTestModule)
    )]
public class RpgOlDomainTestModule : AbpModule
{

}
