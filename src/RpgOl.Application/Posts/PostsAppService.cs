using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts;

public class PostsAppService(IPostRepository postRepository) : RpgOlAppService, IPostsAppService
{
    public async Task<PostDto> CreateAsync(CreatePostDto input, CancellationToken cancellationToken = default)
    {
        var entity = ObjectMapper.Map<CreatePostDto, Post>(input);

        await postRepository.InsertAsync(entity, cancellationToken: cancellationToken);

        return ObjectMapper.Map<Post, PostDto>(entity);
    }

    public async Task<PostDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return ObjectMapper.Map<Post, PostDto>(await postRepository.GetAsync(id, true, cancellationToken));
    }

    public async Task<PagedResultDto<PostDto>> GetListByThreadIdAsync(GetPostInput input, CancellationToken cancellationToken = default)
    {
        var items = ObjectMapper.Map<List<Post>, List<PostDto>>(await postRepository.GetListByThreadId(input.ThreadId, input.SkipCount, input.MaxResultCount, input.Sorting, true, cancellationToken));
        var count = await postRepository.GetCountAsync(input.ThreadId, cancellationToken);

        return new PagedResultDto<PostDto>()
        {
            Items = items,
            TotalCount = count
        };
    }
}
