using Core.Entities;

using System;

#nullable disable

namespace Entities.Concrete
{
    public class Task : IEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime StarterDate { get; set; }
        public DateTime DeadLine { get; set; }
        public int WorkerId { get; set; }

        public virtual Worker Worker { get; set; }
    }
}
