using Core.Entities;

using System;

#nullable disable

namespace Entities.Concrete
{
    public class Event : IEntity
    {
        public int Id { get; set; }
        public int WorkerId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public bool IsBusiness { get; set; }
        public DateTime EventDay { get; set; }
        public int? CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Worker Worker { get; set; }
    }
}
