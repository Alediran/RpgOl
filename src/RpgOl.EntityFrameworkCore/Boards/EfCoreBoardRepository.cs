﻿using Microsoft.EntityFrameworkCore;
using RpgOl.EntityFrameworkCore;
using RpgOl.Enums;
using RpgOl.Extensions;
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
                return await query.PageBy(skipCount, maxResultCount).ToListAsync();

            return await query.ToListAsync();
        }

        public override async Task<IQueryable<Board>> WithDetailsAsync()
        {
            // Uses the extension method defined above
            return (await GetQueryableAsync()).IncludeDetails(true);
        }
    }
}
