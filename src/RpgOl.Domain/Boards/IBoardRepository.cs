using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.Boards
{
    public interface IBoardRepository : IRepository<Board, Guid>
    {
        Task<IList<Board>> GetAll(Guid userId);
    }
}
