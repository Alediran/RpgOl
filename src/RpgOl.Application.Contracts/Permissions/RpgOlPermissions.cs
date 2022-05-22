namespace RpgOl.Permissions;

public static class RpgOlPermissions
{
    public const string GroupName = "RpgOl";

    //Add your own permission names. Example:
    //public const string MyPermission1 = GroupName + ".MyPermission1";

    public class BoardCategories
    {
        public const string Default = GroupName + ".BoardCategories";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
