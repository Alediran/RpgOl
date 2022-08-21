using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;

namespace RpgOl.Threads
{
    [RemoteService(Name = "Threads")]
    [Area("threads")]
    [ControllerName("Threads")]
    [Route("api/threads")]
    public class ThreadsController : RpgOlController, IThreadsAppService
    {
        private readonly IThreadsAppService _threadsAppService;

        public ThreadsController(IThreadsAppService threadsAppService)
        {
            _threadsAppService = threadsAppService;
        }

        [HttpPost]
        public async Task<ThreadDto> CreateAsync(CreateThreadDto input, CancellationToken cancellationToken = default)
        {
            return await _threadsAppService.CreateAsync(input, cancellationToken);
        }

        [HttpGet]
        public async Task<List<ThreadDto>> GetListAsync(Guid boardId, CancellationToken cancellationToken = default)
        {
            return await _threadsAppService.GetListAsync(boardId, cancellationToken);
        }
    }
}
