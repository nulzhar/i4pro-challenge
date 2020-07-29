using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace i4_challenge_backend.Models
{
    public interface IApplicationDbContext : IDisposable
    {
        DbSet<Contact> Contacts { get; set; }
        void MarkAsModified(Contact contact);
        Task<int> CreateContact(Contact contact);
        Task<int> RemoveContact(Contact contact);
        Task<int> SaveChange();
        Task<ActionResult<Contact>> GetContact(int id);
        Task<ActionResult<IEnumerable<Contact>>> GetContacts();
    }
}
