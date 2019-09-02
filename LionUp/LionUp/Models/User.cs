using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class User
    {
        public User()
        {
            CourseDiscussionBoard = new HashSet<CourseDiscussionBoard>();
            CourseDiscussionComment = new HashSet<CourseDiscussionComment>();
            Event = new HashSet<Event>();
            EventDiscussion = new HashSet<EventDiscussion>();
            EventResponse = new HashSet<EventResponse>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SeluEmail { get; set; }
        public string Password { get; set; }
        public int RoleId { get; set; }
        public int MajorId { get; set; }

        public virtual Major Major { get; set; }
        public virtual UserRole Role { get; set; }
        public virtual ICollection<CourseDiscussionBoard> CourseDiscussionBoard { get; set; }
        public virtual ICollection<CourseDiscussionComment> CourseDiscussionComment { get; set; }
        public virtual ICollection<Event> Event { get; set; }
        public virtual ICollection<EventDiscussion> EventDiscussion { get; set; }
        public virtual ICollection<EventResponse> EventResponse { get; set; }
    }
}
