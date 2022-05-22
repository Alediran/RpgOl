using RpgOl.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace RpgOl.BoardCategories
{
    public class EfCoreBoardCategoriesRepository : EfCoreRepository<IRpgOlDbContext, BoardCategory, Guid>, IBoardCategoriesRepository
    {
        public EfCoreBoardCategoriesRepository(IDbContextProvider<IRpgOlDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}
