using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.Boards
{
    public interface IBoardRepository : IRepository<Board, Guid>
    {
        Task<List<Board>> GetAllAsync(Guid userId, int skipCount = 0, int maxResultCount = 0, string sorting = null, bool includeDetails = false, CancellationToken cancellationToken = default);
    }
}
