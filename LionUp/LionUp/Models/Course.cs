using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class Course
    {
        public Course()
        {
            CourseDiscussionBoard = new HashSet<CourseDiscussionBoard>();
        }

        public int Id { get; set; }
        public string CourseCode { get; set; }
        public string CourseName { get; set; }
        public int MajorId { get; set; }
     

        public virtual Major Major { get; set; }
  
        public virtual ICollection<CourseDiscussionBoard> CourseDiscussionBoard { get; set; }
    }
}
