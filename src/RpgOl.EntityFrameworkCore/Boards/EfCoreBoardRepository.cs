using Microsoft.EntityFrameworkCore;
using RpgOl.EntityFrameworkCore;
using RpgOl.Enums;
using RpgOl.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
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

        public async Task<List<Board>> GetAllAsync(Guid? userId, 
            int skipCount = 0, 
            int maxResultCount = 0, 
            string sorting = null, 
            bool includeDetails = false, 
            CancellationToken cancellationToken = default)
        {
            var query = (await GetQueryableAsync())
                .Where(
                    q => q.Type == BoardType.General ||
                    (q.Type == BoardType.Game && q.CreatorId == userId)
                )
                .OrderBy(sorting.IsNullOrWhiteSpace() ? nameof(Board.Name) : sorting);

            if (maxResultCount > 0)
                return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken: cancellationToken);

            return await query.ToListAsync(cancellationToken: cancellationToken);
        }

        public async Task<List<Board>> GetFollowedBoards(Guid? userId, CancellationToken cancellationToken = default)
        {
            return new();
        }

        public async Task<List<Board>> GetGeneralBoards(CancellationToken cancellationToken = default)
        {
            return await (await GetQueryableAsync())
                .Where(q => q.Type == BoardType.General)
                .OrderBy(nameof(Board.Name)).ToListAsync(cancellationToken: cancellationToken);
        }

        public async Task<List<Board>> GetOwnedBoards(Guid? userId, CancellationToken cancellationToken = default)
        {
            if (userId.HasValue)
            {
                return await (await GetQueryableAsync())
                    .Where(q => q.Type == BoardType.Game && q.CreatorId == userId.Value)
                    .OrderBy(nameof(Board.Name)).ToListAsync(cancellationToken: cancellationToken);
            }
            else
            {
                return new();
            }
        }

        public override async Task<IQueryable<Board>> WithDetailsAsync()
        {
            // Uses the extension method defined above
            return (await GetQueryableAsync()).IncludeDetails(true);
        }
    }
}
