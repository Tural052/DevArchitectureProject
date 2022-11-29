using Core.Entities;

using System;
using System.Collections.Generic;

#nullable disable

namespace Entities.Concrete
{
    public class Vacancy : IEntity
    {
        public Vacancy()
        {
            Candidates = new HashSet<Candidate>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime StarterDate { get; set; }
        public DateTime DeadLine { get; set; }

        public virtual ICollection<Candidate> Candidates { get; set; }
    }
}
