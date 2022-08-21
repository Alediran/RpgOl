using AutoMapper;
using Volo.Abp.AutoMapper;

namespace RpgOl.Threads
{
    internal class PostsAutoMapperProfile : Profile
    {
        public PostsAutoMapperProfile()
        {
            CreateMap<Thread, ThreadDto>();

            CreateMap<CreateThreadDto, Thread>()
                .IgnoreFullAuditedObjectProperties();

            CreateMap<UpdateThreadDto, Thread>()
                .IgnoreFullAuditedObjectProperties()
                .Ignore(x => x.Id);
        }
    }
}
