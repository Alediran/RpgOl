using System;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RpgOl.Posts;

public interface IPostsAppService : IApplicationService
{
    Task<PostDto> GetAsync(Guid id, CancellationToken cancellationToken = default);
    Task<PagedResultDto<PostDto>> GetListByThreadIdAsync(GetPostInput input, CancellationToken cancellationToken = default);
    Task<PostDto> CreateAsync(CreatePostDto input, CancellationToken cancellationToken = default);
}
