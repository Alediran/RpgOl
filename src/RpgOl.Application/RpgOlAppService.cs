using RpgOl.Localization;
using Volo.Abp.Application.Services;

namespace RpgOl;

/* Inherit your application services from this class.
 */
public abstract class RpgOlAppService : ApplicationService
{
    protected RpgOlAppService()
    {
        LocalizationResource = typeof(RpgOlResource);
    }
}
