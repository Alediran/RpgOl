using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RpgOl.BoardCategories
{
    public class BoardCategoriesAutoMapperProfile : Profile
    {
        public BoardCategoriesAutoMapperProfile()
        {
            CreateMap<CreateBoardCategoryDto, BoardCategory>();
            CreateMap<BoardCategory, BoardCategoryDto>();
        }
    }
}
