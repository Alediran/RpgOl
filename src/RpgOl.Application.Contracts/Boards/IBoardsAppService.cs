using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RpgOl.Boards
{
    public interface IBoardsAppService : IApplicationService
    {
        Task<BoardDto> GetAsync(Guid id, CancellationToken cancellationToken = default);
        Task<List<BoardDto>> GetListAsync();
        Task<PagedResultDto<BoardDto>> GetPagedBoardsAsync(GetBoardInput input, CancellationToken cancellationToken = default);
        Task<BoardDto> CreateAsync(CreateBoardDto input, CancellationToken cancellationToken = default);
        Task<BoardDto> UpdateAsync(UpdateBoardDto input, CancellationToken cancellationToken = default);
        Task DeleteAsync(Guid id, CancellationToken cancellationToken = default);
    }
}
