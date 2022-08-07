using AutoMapper;
using Volo.Abp.AutoMapper;

namespace RpgOl.Posts
{
    internal class PostsAutoMapperProfile : Profile
    {
        public PostsAutoMapperProfile()
        {
            CreateMap<Post, PostDto>();

            CreateMap<UpdatePostDto, Post>()
                .IgnoreFullAuditedObjectProperties();
        }
    }
}
