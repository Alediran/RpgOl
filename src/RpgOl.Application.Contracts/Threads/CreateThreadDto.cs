using System;

namespace RpgOl.Threads;

public class CreateThreadDto
{
    public string Name { get; set; }
    public Guid BoardId { get; set; }
    public Guid GroupId { get; set; }
}
