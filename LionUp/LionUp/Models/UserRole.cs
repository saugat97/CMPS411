using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class UserRole
    {
        public UserRole()
        {
            User = new HashSet<User>();
        }

        public int Id { get; set; }
        public string Role { get; set; }

        public virtual ICollection<User> User { get; set; }
    }
}
