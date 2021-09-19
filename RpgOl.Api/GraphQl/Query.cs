using HotChocolate;
using HotChocolate.Data;
using Microsoft.EntityFrameworkCore;
using RpgOl.Dal;
using RpgOl.Domain;
using System.Linq;
using System.Threading.Tasks;

namespace RpgOl.Api.GraphQl
{
    public class Query
    {
       public Query()
        { }

        [UseDbContext(typeof(Dal.DbContext))]
        public IQueryable<Board> Boards([ScopedService] Dal.DbContext dbContext) => dbContext.Boards;

        [UseDbContext(typeof(Dal.DbContext))]
        public IQueryable<User> Users([ScopedService] Dal.DbContext dbContext) => dbContext.Users;

        [UseDbContext(typeof(Dal.DbContext))]
        public IQueryable<Player> Players([ScopedService] Dal.DbContext dbContext) => dbContext.Players;

        [UseDbContext(typeof(Dal.DbContext))]
        public async Task<User> ValidateUserAsync([ScopedService] Dal.DbContext dbContext, string userName, string password)
        {
            var user = await dbContext.Users.FirstOrDefaultAsync(u => (u.UserName == userName && u.Password == password));

            return user;
        }
    }   
}
