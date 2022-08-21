using RpgOl.Characters;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace RpgOl.Groups
{
    public class Group : Entity<Guid>
    {
        public virtual string Name { get; protected set; }
        public virtual Guid BoardId { get; protected set; }

        public virtual ICollection<Character> Characters { get; protected set; }
    }
}
