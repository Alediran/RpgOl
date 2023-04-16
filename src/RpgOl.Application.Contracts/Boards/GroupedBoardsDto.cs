using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RpgOl.Boards
{
    public class GroupedBoardsDto
    {
        public List<BoardDto> OwnerBoards { get; set; }
        public List<BoardDto> FollowedBoards { get; set; }
        public List<BoardDto> GeneralBoards { get; set; }
    }
}
