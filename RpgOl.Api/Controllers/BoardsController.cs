using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RpgOl.Api.Services;
using RpgOl.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RpgOl.Api.Controllers
{
    [ApiController]
    [Route("/api/board")]
    public class BoardsController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly IBoardService _boardService;

        public BoardsController(ILogger<UsersController> logger, IBoardService boardService)
        {
            _logger = logger;
            _boardService = boardService;
        }

        [HttpGet]
        public async Task<List<BoardDto>> GetBoardsAsync(Guid userId)
        {
            return await _boardService.GetBoardsAsync(userId);
        }

        [HttpPost]
        public async Task<int> CreateNewGame(BoardDto newGame)
        {
            return await _boardService.CreateNewGame(newGame);
        }
    }
}
