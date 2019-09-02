using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class Course
    {
        public int Id { get; set; }
       
        public string CourseCode { get; set; }
        public string CourseName { get; set; }
        public Semester SemesterOffered { get; set; }
        public virtual Major Major { get; set; }
        public int MajorId { get; set; }

    }
    public enum Semester
    {
        Fall, 
        Spring,
        Summer
    }

}
