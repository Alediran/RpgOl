using AutoMapper;
using Volo.Abp.AutoMapper;

namespace RpgOl.Threads
{
    internal class PostsAutoMapperProfile : Profile
    {
        public PostsAutoMapperProfile()
        {
            CreateMap<Thread, ThreadDto>();

            CreateMap<UpdateThreadDto, Thread>()
                .IgnoreFullAuditedObjectProperties();
        }
    }
}
