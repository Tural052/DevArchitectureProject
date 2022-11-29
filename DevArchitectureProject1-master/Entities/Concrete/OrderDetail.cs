using Core.Entities;

#nullable disable

namespace Entities.Concrete
{
    public class OrderDetail : IEntity
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public int OrderId { get; set; }

        public virtual Order Order { get; set; }
        public virtual Service Service { get; set; }
    }
}
