using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class CourseDiscussionBoard
    {
        public int Id { get; set; }
        public string CourseDiscussionText { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public virtual Course Course { get; set; }
        public int CourseId { get; set; }
    }
}
