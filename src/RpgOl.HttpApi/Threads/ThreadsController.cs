using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
        [HttpGet]
        public Task<IList<ThreadDto>> GetListAsync(Guid boardId)
        {
            throw new NotImplementedException();
        }
    }
}
