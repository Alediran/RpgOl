using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.Boards
{
    public class BoardsAppService : ApplicationService, IBoardsAppService
    {
        private readonly IBoardRepository _boardRepository;

        public async Task<IList<BoardDto>> GetBoardsAsync(Guid userId)
        {
            return ObjectMapper.Map<IList<Board>, IList<BoardDto>>(await _boardRepository.GetAll(userId));
        }
    }
}
