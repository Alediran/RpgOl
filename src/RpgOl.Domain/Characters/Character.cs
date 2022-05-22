using RpgOl.Groups;
using RpgOl.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace RpgOl.Characters
{
    public class Character : FullAuditedAggregateRoot<Guid>
    {
        public virtual Guid BoardId { get; set; }
        public virtual Guid UserId { get; protected set; }
        public virtual string Name { get; protected set;}
        public virtual string Description { get; protected set;}
        public virtual ICollection<Group> Groups { get; protected set; }
    }
}
