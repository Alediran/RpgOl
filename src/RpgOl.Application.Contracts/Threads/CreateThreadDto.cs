using System;
using System.Collections.Generic;
using System.Text;

namespace RpgOl.Threads
{
    public class CreateThreadDto
    {
        public string Name { get; set; }
        public Guid BoardId { get; set; }
        public Guid GroupId { get; set; }
    }
}
