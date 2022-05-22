using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.BoardCategories
{
    public interface IBoardCategoriesAppService : IApplicationService
    {
        Task<IList<BoardCategoryDto>> GetBoardCategoriesAsync();
        Task<BoardCategoryDto> CreateAsync(CreateBoardCategoryDto input, CancellationToken cancellationToken = default);
        Task DeleteAsync(Guid id, CancellationToken cancellationToken = default);
    }
}
