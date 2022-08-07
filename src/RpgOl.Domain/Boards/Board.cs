using RpgOl.BoardCategories;
using RpgOl.Characters;
using RpgOl.Enums;
using RpgOl.Groups;
using RpgOl.Threads;
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
        public virtual ICollection<BoardCategory> BoardCategories { get; protected set; } = new List<BoardCategory>();
        public virtual ICollection<Character> Characters { get; protected set; } = new List<Character>();
        public virtual ICollection<Group> Groups { get; protected set; } = new List<Group>();
        public virtual ICollection<Thread> Threads { get; protected set; } = new List<Thread>();

        protected Board()
        {
        }

        public void AddCategory(BoardCategory boardCategory)
        {
            BoardCategories.Add(boardCategory);
        }

        public void RemoveCategory(BoardCategory boardCategory)
        {
            BoardCategories.Remove(boardCategory);
        }

        public void AddCharacter(Character character)
        {
            Characters.Add(character);
        }

        public void RemoveCharacter(Character character)
        {
            Characters.Remove(character);
        }

        public void AddGroup(Group group)
        {
            Groups.Add(group);
        }

        public void RemoveGroup(Group group)
        {
            Groups.Remove(group);
        }

        public void AddThread(Thread thread)
        {
            Threads.Add(thread);
        }

        public void RemoveThread(Thread thread)
        {
            Threads.Remove(thread);
        }
    }        
}

