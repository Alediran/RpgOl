using System;
using System.Collections.Generic;

namespace RpgOl.Domain
{
    public class BoardDto : Entity<Guid>
    {
        public string Title { get; set; }
        public UserDto Owner { get; set; }
        public List<UserDto> Players { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsGeneral { get; set; }
    }
}
