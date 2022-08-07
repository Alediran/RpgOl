using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.Threads
{
    public class ThreadsAppService : ApplicationService, IThreadsAppService
    {
        private readonly IThreadsRepository _threadsRepository;

        public ThreadsAppService(IThreadsRepository threadsRepository)
        {
            _threadsRepository = threadsRepository;
        }
        public async Task<IList<ThreadDto>> GetListAsync(Guid boardId)
        {
            return ObjectMapper.Map<IList<Thread>, IList<ThreadDto>>(await _threadsRepository.GetAll(boardId));
        }
    }
}
