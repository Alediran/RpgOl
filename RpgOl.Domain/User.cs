﻿using System;
using System.Collections.Generic;

#nullable disable

namespace RpgOl.Domain
{
    public partial class User
    {
        public User()
        {
            Players = new HashSet<Player>();
        }

        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int UserType { get; set; }

        public virtual ICollection<Player> Players { get; set; }
    }
}