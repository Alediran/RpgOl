using AutoMapper;

namespace RpgOl.BoardCategories;

public class BoardCategoriesAutoMapperProfile : Profile
{
    public BoardCategoriesAutoMapperProfile()
    {
        CreateMap<CreateBoardCategoryDto, BoardCategory>();

        CreateMap<BoardCategoryDto, BoardCategory>();
        CreateMap<BoardCategory, BoardCategoryDto>();
    }
}
