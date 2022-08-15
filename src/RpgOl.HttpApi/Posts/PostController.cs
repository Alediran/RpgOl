using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts
{
    [RemoteService(Name = "Posts")]
    [Area("posts")]
    [ControllerName("Posts")]
    [Route("api/posts")]
    public class PostController : RpgOlController, IPostsAppService
    {
        private readonly IPostsAppService _postsAppService;

        public PostController(IPostsAppService postsAppService)
        {
            _postsAppService = postsAppService;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<PostDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return await _postsAppService.GetAsync(id, cancellationToken);
        }

        [HttpGet]
        [Route("thread")]
        public async Task<PagedResultDto<PostDto>> GetListByThreadIdAsync(GetPostInput input, CancellationToken cancellationToken = default)
        {
            return await _postsAppService.GetListByThreadIdAsync(input, cancellationToken);
        }

        [HttpPost]
        public async Task<PostDto> CreateAsync(CreatePostDto input, CancellationToken cancellationToken = default)
        {
            return await _postsAppService.CreateAsync(input, cancellationToken);
        }
    }
}
