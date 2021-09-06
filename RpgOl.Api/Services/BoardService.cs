using RpgOl.Domain;
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

        public async Task<List<BoardDto>> GetBoardsAsync(Guid userId)
        {
            var boards = _dbContext.Boards.Where(q => q.IsGeneral || q.Owner.Id == userId).ToList();

            return await Task.FromResult(boards);
        }

    }
}
