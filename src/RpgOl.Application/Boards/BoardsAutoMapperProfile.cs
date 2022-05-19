using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.AutoMapper;

namespace RpgOl.Boards
{
    public class BoardsAutoMapperProfile : Profile
    {
        public BoardsAutoMapperProfile()
        {
            CreateMap<Board, BoardDto>();
                
            CreateMap<UpdateBoardDto, Board>()
                .IgnoreFullAuditedObjectProperties();
        }
    }
}
