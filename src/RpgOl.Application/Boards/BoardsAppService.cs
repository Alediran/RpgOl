using RpgOl.BoardCategories;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RpgOl.Boards
{
    public class BoardsAppService : ApplicationService, IBoardsAppService
    {
        private readonly IBoardRepository _boardRepository;
        private readonly IBoardCategoriesRepository _boardCategoriesRepository;

        public BoardsAppService(IBoardRepository boardRepository, IBoardCategoriesRepository boardCategoriesRepository)
        {
            _boardRepository = boardRepository;
            _boardCategoriesRepository = boardCategoriesRepository;
        }

        public async Task<BoardDto> CreateAsync(CreateBoardDto input, CancellationToken cancellationToken = default)
        {
            try
            {
                var entity = ObjectMapper.Map<CreateBoardDto, Board>(input);

                input.BoardCategories.ForEach(async (category) =>
                {
                    entity.AddCategory(await _boardCategoriesRepository.GetAsync(category));
                });

                await _boardRepository.InsertAsync(entity, true, cancellationToken);

                return ObjectMapper.Map<Board, BoardDto>(entity);
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("Error while creating a new Category", "CODE 500", innerException: ex);
            }
        }

        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
        {
            var entity = await _boardRepository.GetAsync(id);
            await _boardRepository.DeleteAsync(entity, true, cancellationToken);
        }

        public async Task<BoardDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return ObjectMapper.Map<Board, BoardDto>(await _boardRepository.GetAsync(id, true, cancellationToken));
        }

        public async Task<IList<BoardDto>> GetListAsync()
        {
            return ObjectMapper.Map<IList<Board>, IList<BoardDto>>(await _boardRepository.GetAll(CurrentUser.Id.Value));
        }

        public async Task<PagedResultDto<BoardDto>> GetPagedBoardsAsync(GetBoardInput input, CancellationToken cancellationToken = default)
        {
            try
            {
                var items = await _boardRepository.GetPagedListAsync(input.SkipCount, input.MaxResultCount, input.Sorting, false);

                return new PagedResultDto<BoardDto>
                {
                    TotalCount = await _boardRepository.GetCountAsync(),
                    Items = ObjectMapper.Map<List<Board>, List<BoardDto>>(items)
                };
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("Error while retrieving Boards", "CODE 500", innerException: ex);
            }
        }

        public async Task<BoardDto> UpdateAsync(UpdateBoardDto input, CancellationToken cancellationToken = default)
        {
            var updatedEntityDto = await ObjectMapper.Map(input, _boardRepository.GetAsync(input.Id));

            return ObjectMapper.Map<Board, BoardDto>(await _boardRepository.UpdateAsync(updatedEntityDto, cancellationToken: cancellationToken));
        }
    }
}
