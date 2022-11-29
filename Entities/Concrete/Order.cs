using Core.Entities;

using System;
using System.Collections.Generic;

#nullable disable

namespace Entities.Concrete
{
    public class Order : IEntity
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int WorkerId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Worker Worker { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
