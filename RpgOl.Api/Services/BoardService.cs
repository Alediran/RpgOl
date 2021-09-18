﻿using RpgOl.Domain;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RpgOl.Api.Services
{
    public class BoardService: IBoardService
    {
        private readonly RpgOl.Dal.DbContext _dbContext;

        public BoardService(RpgOl.Dal.DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Board>> GetBoardsAsync(Guid userId)
        {
            var boards = _dbContext.Boards.Where(q => q.IsGeneral || q.OwnerId == userId).ToList();

            return await Task.FromResult(boards);
        }

        public async Task<int> CreateNewGame(Board newGame, System.Threading.CancellationToken cancellationToken = default)
        {
            try {
                await _dbContext.Boards.AddAsync(newGame, cancellationToken);
                return await _dbContext.SaveChangesAsync(cancellationToken);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
