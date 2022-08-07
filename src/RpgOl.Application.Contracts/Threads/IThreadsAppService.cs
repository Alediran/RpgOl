using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.Threads
{
    public interface IThreadsAppService : IApplicationService
    {
        Task<IList<ThreadDto>> GetListAsync(Guid boardId);
    }
}
