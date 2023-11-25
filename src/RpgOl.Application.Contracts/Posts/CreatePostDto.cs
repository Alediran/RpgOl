using System;

namespace RpgOl.Posts;

public class CreatePostDto
{
    public Guid ThreadId { get; set; }
    public Guid? CharacterId { get; set; }
    public string Body { get; set; }
}
