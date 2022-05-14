using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace RpgOl.Web;

[Dependency(ReplaceServices = true)]
public class RpgOlBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "RpgOl";
}
