using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RpgOl.Characters;

public class CharactersAppService(ICharacterRepository characterRepository) : RpgOlAppService, ICharactersAppService
{
}
