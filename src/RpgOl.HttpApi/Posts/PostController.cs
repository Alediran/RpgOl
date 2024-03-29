﻿using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts;

[RemoteService(Name = "Posts")]
[Area("posts")]
[ControllerName("Posts")]
[Route("api/posts")]
public class PostController(IPostsAppService postsAppService) : RpgOlController, IPostsAppService
{
    [HttpGet]
    [Route("{id}")]
    public async Task<PostDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return await postsAppService.GetAsync(id, cancellationToken);
    }

    [HttpGet]
    [Route("thread")]
    public async Task<PagedResultDto<PostDto>> GetListByThreadIdAsync(GetPostInput input, CancellationToken cancellationToken = default)
    {
        return await postsAppService.GetListByThreadIdAsync(input, cancellationToken);
    }

    [HttpPost]
    public async Task<PostDto> CreateAsync(CreatePostDto input, CancellationToken cancellationToken = default)
    {
        return await postsAppService.CreateAsync(input, cancellationToken);
    }
}
