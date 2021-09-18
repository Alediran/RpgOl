using RpgOl.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RpgOl.Api.Services
{
    public interface IBoardService
    {
        Task<List<Board>> GetBoardsAsync(Guid userId);

        Task<int> CreateNewGame(Board newGame, System.Threading.CancellationToken cancellationToken = default);
    }
}
