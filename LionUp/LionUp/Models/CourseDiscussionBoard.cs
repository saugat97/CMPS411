using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class CourseDiscussionBoard
    {
        public CourseDiscussionBoard()
        {
            CourseDiscussionComment = new HashSet<CourseDiscussionComment>();
        }

        public int Id { get; set; }
        public string CourseDiscussionBoardText { get; set; }
        public int UserId { get; set; }
        public int CourseId { get; set; }

        public virtual Course Course { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<CourseDiscussionComment> CourseDiscussionComment { get; set; }
    }
}
