using RpgOl.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace RpgOl.Web.Pages;

public abstract class RpgOlPageModel : AbpPageModel
{
    protected RpgOlPageModel()
    {
        LocalizationResourceType = typeof(RpgOlResource);
    }
}
