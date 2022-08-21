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

namespace RpgOl.BoardCategories
{
    [RemoteService(Name = "BoardCategories")]
    [Area("board-categories")]
    [ControllerName("BoardCategories")]
    [Route("api/board-categories")]
    public class BoardCategoriesController : RpgOlController, IBoardCategoriesAppService
    {
        private readonly IBoardCategoriesAppService _boardCategoriesAppService;

        public BoardCategoriesController(IBoardCategoriesAppService boardCategoriesAppService)
        {
            _boardCategoriesAppService = boardCategoriesAppService;
        }

        [HttpGet]
        [Route("all")]
        public async Task<List<BoardCategoryDto>> GetBoardCategoriesAsync()
        {
            return await _boardCategoriesAppService.GetBoardCategoriesAsync();
        }

        [HttpGet]
        public async Task<PagedResultDto<BoardCategoryDto>> GetPagedBoardCategoriesAsync(GetBoardCategoryInput input)
        {
            return await _boardCategoriesAppService.GetPagedBoardCategoriesAsync(input);
        }

        [HttpPost]
        public async Task<BoardCategoryDto> CreateAsync(CreateBoardCategoryDto input, CancellationToken cancellationToken = default)
        {
            return await _boardCategoriesAppService.CreateAsync(input, cancellationToken);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
        {
            await _boardCategoriesAppService.DeleteAsync(id, cancellationToken);
        }
    }
}
