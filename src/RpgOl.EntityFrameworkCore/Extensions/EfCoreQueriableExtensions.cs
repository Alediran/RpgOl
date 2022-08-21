using Microsoft.EntityFrameworkCore;
using RpgOl.Boards;
using System.Linq;

namespace RpgOl.Extensions
{
    public static class EfCoreQueriableExtensions
    {
        public static IQueryable<Board> IncludeDetails(this IQueryable<Board> queryable, bool include)
        {
           return include ? queryable
                .Include(q => q.BoardCategories)
                .Include(q => q.Characters)
                .Include(q => q.Groups)
                .Include(q => q.Threads) 
           : queryable;
        }
    }
}
