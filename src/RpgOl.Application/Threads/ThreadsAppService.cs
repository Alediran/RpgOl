using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace RpgOl.Threads
{
    public class ThreadsAppService : RpgOlAppService, IThreadsAppService
    {
        private readonly IThreadsRepository _threadsRepository;

        public ThreadsAppService(IThreadsRepository threadsRepository)
        {
            _threadsRepository = threadsRepository;
        }

        public async Task<ThreadDto> CreateAsync(CreateThreadDto input, CancellationToken cancellationToken = default)
        {
            var entity = ObjectMapper.Map<CreateThreadDto, Thread>(input);

            return ObjectMapper.Map<Thread, ThreadDto>(await _threadsRepository.InsertAsync(entity, cancellationToken: cancellationToken));

        }

        public async Task<IList<ThreadDto>> GetListAsync(Guid boardId, CancellationToken cancellationToken = default)
        {
            return ObjectMapper.Map<IList<Thread>, IList<ThreadDto>>(await _threadsRepository.GetAll(boardId));
        }
    }
}
