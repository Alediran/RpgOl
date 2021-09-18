using System;
using System.Collections.Generic;

#nullable disable

namespace RpgOl.Domain
{
    public partial class Player
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid BoardId { get; set; }
        public string Name { get; set; }
        public DateTime? LastPost { get; set; }
        public DateTime? LastLog { get; set; }
        public string Tag { get; set; }

        public virtual Board Board { get; set; }
        public virtual User User { get; set; }
    }
}
