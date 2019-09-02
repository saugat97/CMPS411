using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class Event
    {
        public int Id { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Location { get; set; }
        public bool IsActive { get; set; }
    }
}
