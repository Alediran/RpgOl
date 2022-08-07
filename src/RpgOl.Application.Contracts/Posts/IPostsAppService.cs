using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.Posts
{
    public interface IPostsAppService : IApplicationService
    {
        Task<IList<PostDto>> GetListAsync(Guid threadId);
    }
}
