using RpgOl.Boards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace RpgOl.BoardCategories
{
    public class BoardCategory : AggregateRoot<Guid>
    {
        public virtual string Name { get; protected set; }
        public virtual string Description { get; protected set; }
        public virtual ICollection<Board> Boards { get; protected set; }

        protected BoardCategory()
        {
           
        }
    }
}
