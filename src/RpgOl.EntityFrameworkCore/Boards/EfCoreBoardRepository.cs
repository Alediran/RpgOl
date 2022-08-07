using Microsoft.EntityFrameworkCore;
using RpgOl.EntityFrameworkCore;
using RpgOl.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace RpgOl.Boards
{
    public class EfCoreBoardRepository : EfCoreRepository<IRpgOlDbContext, Board, Guid>, IBoardRepository
    {
        public EfCoreBoardRepository(IDbContextProvider<IRpgOlDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public async Task<IList<Board>> GetAll(Guid userId)
        {
            // Change to a View once Player/Lurker games are implemented
            var query = (await GetDbSetAsync())
                .Where(q => q.Type == BoardType.General || 
                    (q.Type == BoardType.Game && q.CreatorId == userId));

            return await query.ToListAsync();
        }
    }
}
