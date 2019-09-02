using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionUp.Models
{
    public class EventResponse
    {
        public int Id { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public isGoing Response { get; set; }
    }
    public enum isGoing
    {
        Going,
        NotGoing,
        Maybe
    }
}
