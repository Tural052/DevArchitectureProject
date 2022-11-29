using Core.Entities;

#nullable disable

namespace Entities.Concrete
{
    public class Email : IEntity
    {
        public int Id { get; set; }
        public string EmailAddress { get; set; }
        public string PasswordCrm { get; set; }
        public bool IsWorker { get; set; }

        public virtual Candidate IdNavigation { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual Worker Worker { get; set; }
    }
}
