using System;
using System.Collections.Generic;
using RpgOl.Enums;

namespace RpgOl.Boards
{
    public class CreateBoardDto 
    {
        public string Name { get; set; }
        public BoardType Type { get; set; }
        public GameSystem GameSystem { get; set; }
        public List<Guid> BoardCategories { get; set; }
    }
}
