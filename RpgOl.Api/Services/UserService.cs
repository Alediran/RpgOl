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

        public async Task<User> GetByUsername(string userName)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.UserName == userName);

            return user;
        }

        public async Task<User> CreateUser(string userName, string email, string password, DateTime birthday, System.Threading.CancellationToken cancellationToken = default)
        {
            try { 
                await _dbContext.Users.AddAsync(new() { Id = Guid.NewGuid(), UserName = userName, Password = password, Email = email, Birthday = birthday }, cancellationToken);
                await _dbContext.SaveChangesAsync(cancellationToken);
            }
            catch(Exception) { }
            return await GetByUsername(userName);
        }

        public async Task<User> ValidateUser(string userName, string password)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => (u.UserName == userName && u.Password == password));
            user.Password = string.Empty;
            return user;
        }
    }
}
