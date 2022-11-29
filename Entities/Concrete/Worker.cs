using Core.Entities;

using System.Collections.Generic;

#nullable disable

namespace Entities.Concrete
{
    public class Worker : IEntity
    {
        public Worker()
        {
            Events = new HashSet<Event>();
            Orders = new HashSet<Order>();
            Tasks = new HashSet<Task>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int EmailId { get; set; }
        public string MobileNumber { get; set; }
        public string Gender { get; set; }

        public virtual Email Email { get; set; }
        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
    }
}
