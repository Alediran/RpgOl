using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.BoardCategories;

[RemoteService(Name = "BoardCategories")]
[Area("board-categories")]
[ControllerName("BoardCategories")]
[Route("api/board-categories")]
public class BoardCategoriesController(IBoardCategoriesAppService boardCategoriesAppService) : RpgOlController, IBoardCategoriesAppService
{
    [HttpGet]
    [Route("all")]
    public async Task<List<BoardCategoryDto>> GetBoardCategoriesAsync()
    {
        return await boardCategoriesAppService.GetBoardCategoriesAsync();
    }

    [HttpGet]
    public async Task<PagedResultDto<BoardCategoryDto>> GetPagedBoardCategoriesAsync(GetBoardCategoryInput input)
    {
        return await boardCategoriesAppService.GetPagedBoardCategoriesAsync(input);
    }

    [HttpPost]
    public async Task<BoardCategoryDto> CreateAsync(CreateBoardCategoryDto input, CancellationToken cancellationToken = default)
    {
        return await boardCategoriesAppService.CreateAsync(input, cancellationToken);
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
    {
        await boardCategoriesAppService.DeleteAsync(id, cancellationToken);
    }
}
