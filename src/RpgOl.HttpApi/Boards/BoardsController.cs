using Microsoft.AspNetCore.Mvc;
using RpgOl.Controllers;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Boards
{
    [RemoteService(Name = "Boards")]
    [Area("boards")]
    [ControllerName("Boards")]
    [Route("api/boards")]
    public class BoardsController : RpgOlController, IBoardsAppService
    {
        private readonly IBoardsAppService _boardsAppService;

        public BoardsController(IBoardsAppService boardsAppService)
        {
            _boardsAppService = boardsAppService;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<BoardDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return await _boardsAppService.GetAsync(id, cancellationToken);
        }

        [HttpGet]
        [Route("all")]
        public async Task<IList<BoardDto>> GetListAsync()
        {
            return await _boardsAppService.GetListAsync();
        }

        [HttpGet]
        public async Task<PagedResultDto<BoardDto>> GetPagedBoardsAsync(GetBoardInput input, CancellationToken cancellationToken = default)
        {
            return await _boardsAppService.GetPagedBoardsAsync(input, cancellationToken);
        }

        [HttpPost]
        public async Task<BoardDto> CreateAsync(CreateBoardDto input, CancellationToken cancellationToken = default)
        {
            return await _boardsAppService.CreateAsync(input, cancellationToken);
        }

        [HttpPatch]
        public async Task<BoardDto> UpdateAsync(UpdateBoardDto input, CancellationToken cancellationToken = default)
        {
            return await _boardsAppService.UpdateAsync(input, cancellationToken);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
        {
            await _boardsAppService.DeleteAsync(id, cancellationToken);
        }
    }
}
