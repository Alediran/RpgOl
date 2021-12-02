using System;
using System.Collections.Generic;

#nullable disable

namespace RpgOl.Domain
{
    public partial class Board : Entity<Guid>
    {
        public Board()
        {
            Players = new HashSet<Player>();
        }

        public string Title { get; set; }
        public Guid OwnerId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsGeneral { get; set; }

        public virtual ICollection<Player> Players { get; set; }
    }
}
