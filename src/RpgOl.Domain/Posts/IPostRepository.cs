using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.Posts;

public interface IPostRepository : IRepository<Post, Guid>
{
    Task<List<Post>> GetListByThreadId(Guid threadId, int skipCount = 0, int maxResultCount = 0, string sorting = null, bool includeDetails = false, CancellationToken cancellationToken = default);
    Task<int> GetCountAsync(Guid threadId, CancellationToken cancellationToken = default);
}
