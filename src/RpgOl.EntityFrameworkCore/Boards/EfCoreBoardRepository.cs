using Microsoft.EntityFrameworkCore;
using RpgOl.EntityFrameworkCore;
using RpgOl.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Text;
using System.Threading;
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

        public async Task<List<Board>> GetAll(Guid userId, 
            int skipCount = 0, 
            int maxResultCount = 0, 
            string sorting = null, 
            bool includeDetails = false, 
            CancellationToken cancellationToken = default)
        {
            // Change to a View once Player/Lurker games are implemented
            var query = (await GetDbSetAsync())
                .Where(q => q.Type == BoardType.General ||
                    (q.Type == BoardType.Game && q.CreatorId == userId))
                .OrderBy(sorting.IsNullOrWhiteSpace() ? nameof(Board.Name) : sorting);

            if (maxResultCount > 0)
                return await query.PageBy(skipCount, maxResultCount).ToListAsync();

            return await query.ToListAsync();
        }
    }
}
