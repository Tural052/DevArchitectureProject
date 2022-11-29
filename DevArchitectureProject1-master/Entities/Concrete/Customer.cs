using Core.Entities;

using System.Collections.Generic;

#nullable disable

namespace Entities.Concrete
{
    public class Customer : IEntity
    {
        public Customer()
        {
            Events = new HashSet<Event>();
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public int EmailId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string TitleOfCourtesy { get; set; }
        public string MobileNumber { get; set; }

        public virtual Email Email { get; set; }
        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
