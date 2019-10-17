using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class Event
    {
        public Event()
        {
            EventDiscussion = new HashSet<EventDiscussion>();
            EventResponse = new HashSet<EventResponse>();
        }

        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; } 
        public DateTime EndTime { get; set; }
        public string Location { get; set; }
        public bool IsActive { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<EventDiscussion> EventDiscussion { get; set; }
        public virtual ICollection<EventResponse> EventResponse { get; set; }
    }
}
