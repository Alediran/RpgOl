using RpgOl.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace RpgOl.Controllers;

public abstract class RpgOlController : AbpControllerBase
{
    protected RpgOlController()
    {
        LocalizationResource = typeof(RpgOlResource);
    }
}
