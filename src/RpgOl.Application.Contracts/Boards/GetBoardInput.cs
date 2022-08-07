using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Boards
{
    public class GetBoardInput : PagedAndSortedResultRequestDto
    {
        public string FilterText { get; set; }
        public GetBoardInput()
        {
            Sorting = "name ASC";
        }
    }
}
