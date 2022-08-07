using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace RpgOl.Posts
{
    public class UpdatePostDto : EntityDto<Guid>
    {
        public Guid? CharacterId { get; set; }
        public string Body { get; set; }
    }
}
