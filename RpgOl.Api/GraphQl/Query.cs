using HotChocolate;
using HotChocolate.Data;
using RpgOl.Dal;
using RpgOl.Domain;
using System.Linq;

namespace RpgOl.Api.GraphQl
{
    public class Query
    {
       public Query()
        { }

        [UseDbContext(typeof(DbContext))]
        public IQueryable<BoardDto> Boards([ScopedService] DbContext dbContext) => dbContext.Boards;

        [UseDbContext(typeof(DbContext))]
        public IQueryable<UserDto> Users([ScopedService] DbContext dbContext) => dbContext.Users;
    }
}
