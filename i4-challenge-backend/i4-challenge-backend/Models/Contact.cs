using System.Collections.Generic;

namespace i4_challenge_backend.Models
{
    public class Contact
    {
        public int ContactId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Phone> Phones { get; set; }
        public ICollection<Email> Emails { get; set; }

    }
}
