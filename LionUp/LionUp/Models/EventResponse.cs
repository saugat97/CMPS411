using System;
using System.Collections.Generic;

namespace LionUp.Models
{
    public partial class EventResponse
    {
        public int Id { get; set; }
        public int EventId { get; set; }
        public string Response { get; set; }
        public int UserId { get; set; }

        public virtual Event Event { get; set; }
        public virtual User User { get; set; }
    }
}
