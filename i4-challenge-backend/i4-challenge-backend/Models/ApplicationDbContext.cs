using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace i4_challenge_backend.Models
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<Phone> Phones { get; set; }

        public void MarkAsModified(Contact contact)
        {
            Entry(contact).State = EntityState.Modified;
        }

        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            var contact = await Contacts.FindAsync(id);

            if (contact == null)
            {
                return null;
            }

            Entry(contact).Collection(c => c.Phones).Load();
            Entry(contact).Collection(c => c.Emails).Load();

            return contact;
        }
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            var contacts = await Contacts.ToListAsync();
            contacts.ForEach(c => Entry(c).Collection(co => co.Phones).Load());
            return await Contacts.ToListAsync();
        }

        public async Task<int> CreateContact(Contact contact)
        {
            Contacts.Add(contact);
            return await SaveChangesAsync();
        }

        public async Task<int> RemoveContact(Contact contact)
        {
            Contacts.Remove(contact);
            return await SaveChangesAsync();
        }

        public async Task<int> SaveChange()
        {
            return await SaveChangesAsync();
        }
    }
}
