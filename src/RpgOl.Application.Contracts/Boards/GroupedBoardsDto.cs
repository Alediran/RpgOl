using System.Collections.Generic;

namespace RpgOl.Boards;

public class GroupedBoardsDto
{
    public List<BoardDto> OwnerBoards { get; set; }
    public List<BoardDto> FollowedBoards { get; set; }
    public List<BoardDto> GeneralBoards { get; set; }
}
