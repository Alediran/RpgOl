using AutoMapper;

namespace RpgOl.Groups;

internal class GroupsAutoMapperProfile : Profile
{
    public GroupsAutoMapperProfile()
    {
        CreateMap<Group, GroupDto>();


    }
}
