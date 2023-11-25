using Microsoft.EntityFrameworkCore;
using RpgOl.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace RpgOl.Threads;

public class EfCoreThreadRepository(IDbContextProvider<IRpgOlDbContext> dbContextProvider) : EfCoreRepository<IRpgOlDbContext, Thread, Guid>(dbContextProvider), IThreadRepository
{
    public async Task<List<Thread>> GetAll(Guid boardId)
    {
        var query = (await GetDbSetAsync()).Where(x => x.BoardId == boardId);

        return await query.ToListAsync();
    }
}
