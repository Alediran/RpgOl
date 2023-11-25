using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace RpgOl.Threads;

public class ThreadsAppService(IThreadRepository threadsRepository) : RpgOlAppService, IThreadsAppService
{
    public async Task<ThreadDto> CreateAsync(CreateThreadDto input, CancellationToken cancellationToken = default)
    {
        try
        {
            var entity = ObjectMapper.Map<CreateThreadDto, Thread>(input);

            return ObjectMapper.Map<Thread, ThreadDto>(await threadsRepository.InsertAsync(entity, cancellationToken: cancellationToken));
        }
        catch(Exception)
        {
            throw;
        }
    }

    public async Task<List<ThreadDto>> GetListAsync(Guid boardId, CancellationToken cancellationToken = default)
    {
        return ObjectMapper.Map<List<Thread>, List<ThreadDto>>(await threadsRepository.GetAll(boardId));
    }
}
