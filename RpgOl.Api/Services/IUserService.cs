using RpgOl.Domain;
using System;
using System.Threading.Tasks;

namespace RpgOl.Api.Services
{
    public interface IUserService
    {
        Task<User> GetByEmail(string email);
        Task<User> GetByUsername(string userName);
        Task<User> CreateUser(string userName, string email, string password, DateTime birthday, System.Threading.CancellationToken cancellationToken = default);
        Task<User> ValidateUser(string userName, string password);
    }
}
