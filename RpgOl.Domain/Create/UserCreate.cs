using System;

namespace RpgOl.Domain.Create
{
    public class UserCreate
    {
        public UserCreate()
        {

        }

        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int UserType { get; set; }
    }
}
