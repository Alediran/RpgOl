using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.Localization;
using Volo.Abp.OpenIddict.Applications;

namespace RpgOl.Pages;

public class IndexModel(IOpenIddictApplicationRepository openIdApplicationmRepository, ILanguageProvider languageProvider) : AbpPageModel
{
    public List<OpenIddictApplication> Applications { get; protected set; }

    public IReadOnlyList<LanguageInfo> Languages { get; protected set; }

    public string CurrentLanguage { get; protected set; }

    protected IOpenIddictApplicationRepository OpenIdApplicationRepository { get; } = openIdApplicationmRepository;

    protected ILanguageProvider LanguageProvider { get; } = languageProvider;

    public async Task OnGetAsync()
    {
        Applications = await OpenIdApplicationRepository.GetListAsync();

        Languages = await LanguageProvider.GetLanguagesAsync();
        CurrentLanguage = CultureInfo.CurrentCulture.DisplayName;
    }
}