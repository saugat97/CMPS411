using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class Semester
    {
        public Semester()
        {
            Course = new HashSet<Course>();
        }

        public int Id { get; set; }
        public string Semester1 { get; set; }

        public virtual ICollection<Course> Course { get; set; }
    }
}
