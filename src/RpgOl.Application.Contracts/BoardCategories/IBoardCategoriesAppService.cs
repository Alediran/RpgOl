using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RpgOl.BoardCategories;

public interface IBoardCategoriesAppService : IApplicationService
{
    Task<List<BoardCategoryDto>> GetBoardCategoriesAsync();
    Task<PagedResultDto<BoardCategoryDto>> GetPagedBoardCategoriesAsync(GetBoardCategoryInput input);
    Task<BoardCategoryDto> CreateAsync(CreateBoardCategoryDto input, CancellationToken cancellationToken = default);
    Task DeleteAsync(Guid id, CancellationToken cancellationToken = default);
}
