using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.Threads
{
    public interface IThreadsRepository : IRepository<Thread, Guid>
    {
        Task<IList<Thread>> GetAll(Guid boardId);
    }
}
