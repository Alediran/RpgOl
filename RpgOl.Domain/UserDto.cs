using System;

namespace RpgOl.Domain
{
    public class UserDto : Entity<Guid>
    {
        public string User { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Birthday {get;set;}
    }
}
