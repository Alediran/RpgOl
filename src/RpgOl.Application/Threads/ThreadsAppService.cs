using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace RpgOl.Threads
{
    public class ThreadsAppService : RpgOlAppService, IThreadsAppService
    {
        private readonly IThreadRepository _threadsRepository;

        public ThreadsAppService(IThreadRepository threadsRepository)
        {
            _threadsRepository = threadsRepository;
        }

        public async Task<ThreadDto> CreateAsync(CreateThreadDto input, CancellationToken cancellationToken = default)
        {
            try
            {
                var entity = ObjectMapper.Map<CreateThreadDto, Thread>(input);

                return ObjectMapper.Map<Thread, ThreadDto>(await _threadsRepository.InsertAsync(entity, cancellationToken: cancellationToken));
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<ThreadDto>> GetListAsync(Guid boardId, CancellationToken cancellationToken = default)
        {
            return ObjectMapper.Map<List<Thread>, List<ThreadDto>>(await _threadsRepository.GetAll(boardId));
        }
    }
}
