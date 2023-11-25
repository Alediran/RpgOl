using System;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts;

public class PostDto : FullAuditedEntityDto<Guid>
{
    public Guid ThreadId { get; set; }
    public Guid? CharacterId { get; set; }
    public string Body { get; set; }
}
