using Volo.Abp.Settings;

namespace RpgOl.Settings;

public class RpgOlSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(RpgOlSettings.MySetting1));
    }
}
