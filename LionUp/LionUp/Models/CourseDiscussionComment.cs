using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class CourseDiscussionComment
    {
        public int Id { get; set; }
        public int CourseDiscussionBoardId { get; set; }
        public int UserId { get; set; }
        public string CourseDiscussionCommentText { get; set; }

        public virtual CourseDiscussionBoard CourseDiscussionBoard { get; set; }
        public virtual User User { get; set; }
    }
}
