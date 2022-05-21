﻿using RpgOl.BoardCategories;
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
        public virtual List<BoardCategory> BoardCategories { get; protected set; }
        public virtual List<Character> Characters { get; protected set; }
        public virtual List<Group> Groups { get; protected set; }
        public virtual List<Thread> Threads { get; protected set; }

        protected Board()
        {
            BoardCategories = new();
        }

        public void AddCategory(BoardCategory boardCategory)
        {
            BoardCategories.Add(boardCategory);
        }

        public void AddCharacter(Character character)
        {
            Characters.Add(character);
        }

        public void AddGroup(Group group)
        {
            Groups.Add(group);
        }

        public void AddThread(Thread thread)
        {
            Threads.Add(thread);
        }
    }        
}

