using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.Boards
{
    public interface IBoardsAppService : IApplicationService
    {
        Task<IList<BoardDto>> GetBoardsAsync(Guid userId);
    }
}
