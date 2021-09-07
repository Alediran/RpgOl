using RpgOl.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RpgOl.Api.Services
{
    public interface IBoardService
    {
        Task<List<BoardDto>> GetBoardsAsync(Guid userId);

        Task<int> CreateNewGame(BoardDto newGame, System.Threading.CancellationToken cancellationToken = default);
    }
}
