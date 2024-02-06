using RpgOl.Groups;
using RpgOl.Posts;
using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Characters;

public class CharacterDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; protected set; }
    public virtual string Description { get; protected set; }
    public virtual ICollection<GroupDto> Groups { get; protected set; }
    public virtual ICollection<PostDto> Posts { get; protected set; }
    public virtual Dictionary<string, object> Values { get; protected set; }
}
