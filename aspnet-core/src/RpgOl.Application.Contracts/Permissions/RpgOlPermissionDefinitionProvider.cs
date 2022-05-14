using RpgOl.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace RpgOl.Permissions;

public class RpgOlPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(RpgOlPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(RpgOlPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<RpgOlResource>(name);
    }
}
