using Microsoft.AspNetCore.Authorization;
using RpgOl.Permissions;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.BoardCategories;

[Authorize(RpgOlPermissions.BoardCategories.Default)]
public class BoardCategoriesAppService(IBoardCategoriesRepository boardCategoriesRepository) : RpgOlAppService, IBoardCategoriesAppService
{
    public async Task<List<BoardCategoryDto>> GetBoardCategoriesAsync()
    {
        return ObjectMapper.Map<List<BoardCategory>, List<BoardCategoryDto>>(await boardCategoriesRepository.GetListAsync());
    }

    public async Task<PagedResultDto<BoardCategoryDto>> GetPagedBoardCategoriesAsync(GetBoardCategoryInput input)
    {
        try
        {
            var items = await boardCategoriesRepository.GetPagedListAsync(input.SkipCount, input.MaxResultCount, input.Sorting, false);

            return new PagedResultDto<BoardCategoryDto>
            {
                TotalCount = await boardCategoriesRepository.GetCountAsync(),
                Items = ObjectMapper.Map<List<BoardCategory>, List<BoardCategoryDto>>(items)
            };
        }
        catch (Exception ex)
        {
            throw new UserFriendlyException("Error while retrieving Board Categories", "CODE 500", innerException: ex);
        }
    }

    [Authorize(RpgOlPermissions.BoardCategories.Create)]
    public async Task<BoardCategoryDto> CreateAsync(CreateBoardCategoryDto input, CancellationToken cancellationToken = default)
    {
        try
        {
            var entity = ObjectMapper.Map<CreateBoardCategoryDto, BoardCategory>(input);
            await boardCategoriesRepository.InsertAsync(entity, true, cancellationToken);

            return ObjectMapper.Map<BoardCategory, BoardCategoryDto>(entity);
        }
        catch(Exception ex)
        {
            throw new UserFriendlyException("Error while creating a new Category", "CODE 500", innerException: ex);
        }
    }

    [Authorize(RpgOlPermissions.BoardCategories.Delete)]
    public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var entity = await boardCategoriesRepository.GetAsync(id, cancellationToken: cancellationToken);
        await boardCategoriesRepository.DeleteAsync(entity, true, cancellationToken);
    }
}
