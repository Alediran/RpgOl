#nullable enable
using System;
using System.Collections.Generic;

namespace RpgOl.Domain
{
    public class BoardDto : Entity<Guid>
    {
        public string Title { get; set; }
        public UserDto Owner { get; set; }
        //public List<UserDto>? Players { get; set; }
        //public List<Int32> Categories { get; set; }
        public Int32 System { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsGeneral { get; set; }

        public BoardDto()
        {
            Title = string.Empty;
            Owner = new UserDto();
            //Categories = new List<int>();
        }
    }
}
