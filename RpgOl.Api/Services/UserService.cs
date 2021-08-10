using Microsoft.EntityFrameworkCore;
using RpgOl.Domain;
using System;
using System.Threading.Tasks;

namespace RpgOl.Api.Services
{
    public class UserService : IUserService
    {
        private readonly RpgOl.Dal.DbContext _dbContext;

        public UserService(RpgOl.Dal.DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<UserDto> GetByUsername(string userName)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.User == userName);

            return user;
        }

        public async Task<UserDto> CreateUser(string userName, string email, string password, DateTime birthday, System.Threading.CancellationToken cancellationToken = default)
        {
            try { 
            await _dbContext.Users.AddAsync(new() { Id = Guid.NewGuid(), User = userName, Password = password, Email = email, Birthday = birthday }, cancellationToken);
            await _dbContext.SaveChangesAsync(cancellationToken);
            }
            catch(Exception ex) { }
            return await GetByUsername(userName);
        }

        public async Task<UserDto> ValidateUser(string userName, string password)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.User == userName && u.Password == password);

            return user;
        }
    }
}
