using RpgOl.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace RpgOl.Permissions;

public class RpgOlPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(RpgOlPermissions.GroupName);

        var boardCategoriesPermission = myGroup.AddPermission(RpgOlPermissions.BoardCategories.Default, L("Permissions:BoardCategories"));
        boardCategoriesPermission.AddChild(RpgOlPermissions.BoardCategories.Create, L("Permissions:BoardCategories:Create"));
        boardCategoriesPermission.AddChild(RpgOlPermissions.BoardCategories.Delete, L("Permissions:BoardCategories:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<RpgOlResource>(name);
    }
}
