﻿using RpgOl.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace RpgOl.Threads
{
    public class Thread : FullAuditedAggregateRoot<Guid>
    {
        public virtual string Name { get; protected set; }
        public virtual Guid BoardId { get; protected set; }
        public virtual Guid GroupId { get; protected set; }
        public virtual List<Post> Posts { get; protected set; }

        protected Thread()
        {
            Posts = new();
        }

        public void AddPost(Post post)
        {
            Posts.Add(post);
        }
    }
}