using RpgOl.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace RpgOl.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class RpgOlController : AbpControllerBase
{
    protected RpgOlController()
    {
        LocalizationResource = typeof(RpgOlResource);
    }
}
