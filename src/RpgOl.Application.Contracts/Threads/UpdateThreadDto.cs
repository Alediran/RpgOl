using System;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Threads;

public class UpdateThreadDto : EntityDto<Guid>
{
    public virtual string Name { get; set; }
    public virtual Guid BoardId { get; set; }
    public virtual Guid GroupId { get; set; }
}
