using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SeluEmail { get; set; }
        public string Password { get; set; }
        public UserRole Role { get; set; }
        public virtual Major Major { get; set; }
        public int MajorId { get; set; }

    }
    public enum UserRole
    {
        Student, 
        Admin
    }
}
