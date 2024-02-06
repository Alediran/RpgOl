using System;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.Characters;

public interface ICharacterRepository : IRepository<Character, Guid>
{
}
