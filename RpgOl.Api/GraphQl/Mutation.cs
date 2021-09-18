using System;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Data;
using Microsoft.EntityFrameworkCore;
using RpgOl.Domain;
using RpgOl.Domain.Create;

namespace RpgOl.Api.GraphQl
{
    public class Mutation
    {
        public Mutation()
        { }

        [UseDbContext(typeof(RpgOl.Dal.DbContext))]
        public async Task<User> CreateUser(UserCreate user, [ScopedService] RpgOl.Dal.DbContext dbContext, System.Threading.CancellationToken cancellationToken = default)
        {
            try
            {
                await dbContext.Users.AddAsync(new()
                {
                    Id = Guid.NewGuid(),
                    UserName = user.UserName,
                    Password = user.Password,
                    Email = user.Email,
                    Birthday = user.Birthday
                }, cancellationToken);

                await dbContext.SaveChangesAsync(cancellationToken);                
            }
            catch (Exception) { }
            return await dbContext.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName, cancellationToken: cancellationToken);
        }
    }
}
