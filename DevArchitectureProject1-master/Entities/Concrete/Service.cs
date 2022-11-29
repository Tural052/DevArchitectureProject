using Core.Entities;

using System.Collections.Generic;

#nullable disable

namespace Entities.Concrete
{
    public class Service : IEntity
    {
        public Service()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
