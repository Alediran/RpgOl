using RpgOl.Domain;
using System;
using System.Threading.Tasks;

namespace RpgOl.Api.Services
{
    public interface IUserService
    {
        Task<UserDto> GetByUsername(string userName);
        Task<UserDto> CreateUser(string userName, string email, string password, DateTime birthday, System.Threading.CancellationToken cancellationToken = default);
        Task<UserDto> ValidateUser(string userName, string password);
    }
}
