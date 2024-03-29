﻿using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace RpgOl.Posts;

public class Post : FullAuditedEntity<Guid>
{
    public virtual Guid ThreadId { get; protected set; }
    public virtual Guid? CharacterId { get; protected set; }
    public virtual string Body { get; protected set; }
}
