using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class CourseDiscussionComment
    {
        public int Id { get; set; }
        public virtual CourseDiscussionBoard CourseDiscussionBoard { get; set; }
        public int CourseDiscussionBoardId { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public string CourseDiscussionCommentText { get; set; }

    }
}
