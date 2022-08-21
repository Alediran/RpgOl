using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RpgOl.Groups
{
    internal class GroupsAutoMapperProfile : Profile
    {
        public GroupsAutoMapperProfile()
        {
            CreateMap<Group, GroupDto>();


        }
    }
}
