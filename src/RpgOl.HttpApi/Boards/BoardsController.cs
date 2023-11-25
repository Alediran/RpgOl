using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Boards;

[RemoteService(Name = "Boards")]
[Area("boards")]
[ControllerName("Boards")]
[Route("api/boards")]
public class BoardsController(IBoardsAppService boardsAppService) : RpgOlController, IBoardsAppService
{
    [HttpGet]
    [Route("{id}")]
    public async Task<BoardDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return await boardsAppService.GetAsync(id, cancellationToken);
    }

    [HttpGet]
    [Route("all")]
    public async Task<GroupedBoardsDto> GetListAsync()
    {
        return await boardsAppService.GetListAsync();
    }

    [HttpGet]
    public async Task<PagedResultDto<BoardDto>> GetPagedBoardsAsync(GetBoardInput input, CancellationToken cancellationToken = default)
    {
        return await boardsAppService.GetPagedBoardsAsync(input, cancellationToken);
    }

    [HttpPost]
    public async Task<BoardDto> CreateAsync(CreateBoardDto input, CancellationToken cancellationToken = default)
    {
        return await boardsAppService.CreateAsync(input, cancellationToken);
    }

    [HttpPatch]
    public async Task<BoardDto> UpdateAsync(UpdateBoardDto input, CancellationToken cancellationToken = default)
    {
        return await boardsAppService.UpdateAsync(input, cancellationToken);
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
    {
        await boardsAppService.DeleteAsync(id, cancellationToken);
    }
}
