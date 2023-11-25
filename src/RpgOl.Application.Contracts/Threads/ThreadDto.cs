using RpgOl.Posts;
using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Threads;

public class ThreadDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; set; }
    public Guid BoardId { get; set; }
    public Guid GroupId { get; set; }
    public ICollection<PostDto> Posts { get; set; }
}
