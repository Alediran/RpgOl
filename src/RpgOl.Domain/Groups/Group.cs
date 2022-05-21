using RpgOl.Characters;
using RpgOl.Threads;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace RpgOl.Groups
{
    public class Group : Entity<Guid>
    {
        public virtual string Name { get; protected set; }
        public virtual Guid BoardId { get; protected set; }
        public virtual List<Thread> Threads { get; protected set; }
        public virtual List<Character> Characters { get; protected set; }
    }
}
