using AutoMapper;
using Volo.Abp.AutoMapper;

namespace RpgOl.Boards;

internal class BoardsAutoMapperProfile : Profile
{
    public BoardsAutoMapperProfile()
    {
        CreateMap<Board, BoardDto>();
            
        CreateMap<CreateBoardDto, Board>()
            .IgnoreFullAuditedObjectProperties()
            .Ignore(x => x.Id)
            .Ignore(x => x.BoardCategories);

        CreateMap<UpdateBoardDto, Board>()
            .IgnoreFullAuditedObjectProperties();
    }
}
