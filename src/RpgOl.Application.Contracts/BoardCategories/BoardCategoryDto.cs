using System;
using Volo.Abp.Application.Dtos;

namespace RpgOl.BoardCategories;

public class BoardCategoryDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; set; }
    public string Description { get; set; }
}
