using RpgOl.BoardCategories;
using RpgOl.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
namespace RpgOl.Boards
{
    public class CreateBoardDto 
    {
        public string Name { get; set; }
        public BoardType Type { get; set; }
        public GameSystem GameSystem { get; set; }
        public List<BoardCategoryDto> BoardCategories { get; set; }
    }
}
