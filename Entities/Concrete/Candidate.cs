using Core.Entities;

#nullable disable

namespace Entities.Concrete
{
    public class Candidate : IEntity
    {
        public int Id { get; set; }
        public int VacantionId { get; set; }
        public int EmailId { get; set; }
        public string MobileNumber { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        public virtual Vacancy Vacantion { get; set; }
        public virtual Email Email { get; set; }
    }
}
