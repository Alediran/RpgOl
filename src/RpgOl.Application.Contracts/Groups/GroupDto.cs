using System;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Groups;

public class GroupDto : EntityDto<Guid>
{
    public string Name { get; set; }
    
}
