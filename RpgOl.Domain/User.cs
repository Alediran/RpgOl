using System;
using System.Collections.Generic;

#nullable disable

namespace RpgOl.Domain
{
    public partial class User : Entity<Guid>
    {
        public User()
        {
            Players = new HashSet<Player>();
        }

        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public UserType UserType { get; set; }

        public virtual ICollection<Player> Players { get; set; }

        public virtual ICollection<Board> Boards { get; set; }
    }
}
