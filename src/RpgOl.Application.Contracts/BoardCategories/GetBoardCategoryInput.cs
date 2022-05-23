using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace RpgOl.BoardCategories
{
    public class GetBoardCategoryInput : PagedAndSortedResultRequestDto
    {
        public string FilterText { get; set; }
        public GetBoardCategoryInput()
        {
            Sorting = "name ASC";
        }
    }
}
