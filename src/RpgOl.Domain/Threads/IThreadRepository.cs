using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.Threads
{
    public interface IThreadRepository : IRepository<Thread, Guid>
    {
        Task<List<Thread>> GetAll(Guid boardId);
    }
}
