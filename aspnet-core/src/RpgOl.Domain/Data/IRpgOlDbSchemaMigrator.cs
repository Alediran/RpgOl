using System.Threading.Tasks;

namespace RpgOl.Data;

public interface IRpgOlDbSchemaMigrator
{
    Task MigrateAsync();
}
