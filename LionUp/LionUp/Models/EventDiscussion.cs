using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class EventDiscussion
    {
        public int Id { get; set; }
        public string EventDiscussionText { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public virtual Event Event { get; set; }
        public int EventId { get; set; }
    }
}
