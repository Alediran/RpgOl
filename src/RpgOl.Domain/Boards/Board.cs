using RpgOl.BoardCategories;
using RpgOl.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace RpgOl.Boards
{
    public class Board : FullAuditedAggregateRoot<Guid>
    {
        public virtual string Name { get; protected set; }
        public virtual BoardType Type { get; protected set; } = BoardType.Game;
        public virtual GameSystem GameSystem { get; protected set; }
        public virtual List<BoardCategory> BoardCategories { get; protected set; }

        protected Board()
        {
            BoardCategories = new();
        }

        public void AddCategory(BoardCategory boardCategory)
        {
            BoardCategories.Add(boardCategory);
        }
    }        
}

