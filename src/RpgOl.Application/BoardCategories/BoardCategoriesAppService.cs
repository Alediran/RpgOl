using Microsoft.AspNetCore.Authorization;
using RpgOl.Permissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RpgOl.BoardCategories
{
    [Authorize(RpgOlPermissions.BoardCategories.Default)]
    public class BoardCategoriesAppService : ApplicationService, IBoardCategoriesAppService
    {
        private readonly IBoardCategoriesRepository _boardCategoriesRepository;

        public BoardCategoriesAppService(IBoardCategoriesRepository boardCategoriesRepository)
        {
            _boardCategoriesRepository = boardCategoriesRepository;
        }

        public async Task<IList<BoardCategoryDto>> GetBoardCategoriesAsync()
        {
            return ObjectMapper.Map<List<BoardCategory>, List<BoardCategoryDto>>(await _boardCategoriesRepository.GetListAsync());
        }

        [Authorize(RpgOlPermissions.BoardCategories.Create)]
        public async Task<BoardCategoryDto> CreateAsync(CreateBoardCategoryDto input, CancellationToken cancellationToken = default)
        {
            var entity = ObjectMapper.Map<CreateBoardCategoryDto, BoardCategory>(input);
            await _boardCategoriesRepository.InsertAsync(entity, true, cancellationToken);

            return ObjectMapper.Map<BoardCategory, BoardCategoryDto>(entity);
        }

        [Authorize(RpgOlPermissions.BoardCategories.Delete)]
        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
        {
            var entity = await _boardCategoriesRepository.GetAsync(id);
            await _boardCategoriesRepository.DeleteAsync(entity, true, cancellationToken);
        }
    }
}
