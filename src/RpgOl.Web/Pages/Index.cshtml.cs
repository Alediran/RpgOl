using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace RpgOl.Web.Pages;

public class IndexModel : RpgOlPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
