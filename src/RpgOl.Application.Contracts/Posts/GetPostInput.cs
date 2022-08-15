﻿using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts
{
    public class GetPostInput : PagedAndSortedResultRequestDto
    {
        public Guid ThreadId { get; set; }
        public string FilterText { get; set; }

        public GetPostInput()
        {
            Sorting = "creationTime ASC";
        }
    }
}
