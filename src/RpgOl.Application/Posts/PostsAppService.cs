using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts
{
    public class PostsAppService : RpgOlAppService, IPostsAppService
    {
        private readonly IPostRepository _postRepository;

        public PostsAppService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public async Task<PostDto> CreateAsync(CreatePostDto input, CancellationToken cancellationToken = default)
        {
            var entity = ObjectMapper.Map<CreatePostDto, Post>(input);

            await _postRepository.InsertAsync(entity, cancellationToken: cancellationToken);

            return ObjectMapper.Map<Post, PostDto>(entity);
        }

        public async Task<PostDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return ObjectMapper.Map<Post, PostDto>(await _postRepository.GetAsync(id, true, cancellationToken));
        }

        public async Task<PagedResultDto<PostDto>> GetListByThreadIdAsync(GetPostInput input, CancellationToken cancellationToken = default)
        {
            var items = ObjectMapper.Map<List<Post>, List<PostDto>>(await _postRepository.GetListByThreadId(input.ThreadId, input.SkipCount, input.MaxResultCount, input.Sorting, true, cancellationToken));
            var count = await _postRepository.GetCountAsync(input.ThreadId, cancellationToken);

            return new PagedResultDto<PostDto>()
            {
                Items = items,
                TotalCount = count
            };
        }
    }
}
