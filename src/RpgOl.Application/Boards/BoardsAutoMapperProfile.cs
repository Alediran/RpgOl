using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.AutoMapper;

namespace RpgOl.Boards
{
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
}
