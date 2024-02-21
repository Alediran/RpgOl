using RpgOl.BoardCategories;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Boards;

public class BoardsAppService(IBoardRepository boardRepository, IBoardCategoriesRepository boardCategoriesRepository) : RpgOlAppService, IBoardsAppService
{
    public async Task<BoardDto> CreateAsync(CreateBoardDto input, CancellationToken cancellationToken = default)
    {
        try
        {   
            var entity = ObjectMapper.Map<CreateBoardDto, Board>(input);

            input.BoardCategories.ForEach(async (category) =>
            {
                entity.AddCategory(await boardCategoriesRepository.GetAsync(category));
            });

            await boardRepository.InsertAsync(entity, true, cancellationToken);

            return ObjectMapper.Map<Board, BoardDto>(entity);
        }
        catch (Exception ex)
        {
            throw new UserFriendlyException("Error while creating a new Category", "CODE 500", innerException: ex);
        }
    }

    public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var entity = await boardRepository.GetAsync(id, cancellationToken: cancellationToken);
        await boardRepository.DeleteAsync(entity, true, cancellationToken);
    }

    public async Task<BoardDto> GetAsync(Guid id, CancellationToken cancellationToken = default)
    {
        try
        {
            return ObjectMapper.Map<Board, BoardDto>(await boardRepository.GetAsync(id, true, cancellationToken));
        }
        catch(Exception)
        {
            throw;
        }
    }

    public async Task<GroupedBoardsDto> GetListAsync()
    {
        return new()
        {
            OwnerBoards = ObjectMapper.Map<List<Board>, List<BoardDto>>(await boardRepository.GetOwnedBoards(CurrentUser.Id)),
            FollowedBoards = ObjectMapper.Map<List<Board>, List<BoardDto>>(await boardRepository.GetFollowedBoards(CurrentUser.Id)),
            GeneralBoards = ObjectMapper.Map<List<Board>, List<BoardDto>>(await boardRepository.GetGeneralBoards())
        };
    }

    public async Task<PagedResultDto<BoardDto>> GetPagedBoardsAsync(GetBoardInput input, CancellationToken cancellationToken = default)
    {
        try
        {
            var items = await boardRepository.GetAllAsync(CurrentUser.Id, input.SkipCount, input.MaxResultCount, input.Sorting, false, cancellationToken);

            return new PagedResultDto<BoardDto>
            {
                Items = ObjectMapper.Map<List<Board>, List<BoardDto>>(items),
                TotalCount = await boardRepository.GetCountAsync(cancellationToken)
            };
        }
        catch (Exception ex)
        {
            throw new UserFriendlyException("Error while retrieving Boards", "CODE 500", innerException: ex);
        }
    }

    public async Task<BoardDto> UpdateAsync(UpdateBoardDto input, CancellationToken cancellationToken = default)
    {
        var updatedEntityDto = await ObjectMapper.Map(input, boardRepository.GetAsync(input.Id, cancellationToken: cancellationToken));

        return ObjectMapper.Map<Board, BoardDto>(await boardRepository.UpdateAsync(updatedEntityDto, cancellationToken: cancellationToken));
    }
}
