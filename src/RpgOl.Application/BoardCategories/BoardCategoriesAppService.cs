using Microsoft.AspNetCore.Authorization;
using RpgOl.Permissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RpgOl.BoardCategories
{
    [Authorize(RpgOlPermissions.BoardCategories.Default)]
    public class BoardCategoriesAppService : RpgOlAppService, IBoardCategoriesAppService
    {
        private readonly IBoardCategoriesRepository _boardCategoriesRepository;

        public BoardCategoriesAppService(IBoardCategoriesRepository boardCategoriesRepository)
        {
            _boardCategoriesRepository = boardCategoriesRepository;
        }

        public async Task<IList<BoardCategoryDto>> GetBoardCategoriesAsync()
        {
            return ObjectMapper.Map<IList<BoardCategory>, IList<BoardCategoryDto>>(await _boardCategoriesRepository.GetListAsync());
        }

        public async Task<PagedResultDto<BoardCategoryDto>> GetPagedBoardCategoriesAsync(GetBoardCategoryInput input)
        {
            try
            {
                var items = await _boardCategoriesRepository.GetPagedListAsync(input.SkipCount, input.MaxResultCount, input.Sorting, false);

                return new PagedResultDto<BoardCategoryDto>
                {
                    TotalCount = await _boardCategoriesRepository.GetCountAsync(),
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
                await _boardCategoriesRepository.InsertAsync(entity, true, cancellationToken);

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
            var entity = await _boardCategoriesRepository.GetAsync(id);
            await _boardCategoriesRepository.DeleteAsync(entity, true, cancellationToken);
        }
    }
}
