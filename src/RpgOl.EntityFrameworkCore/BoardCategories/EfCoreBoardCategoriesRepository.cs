using RpgOl.EntityFrameworkCore;
using System;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace RpgOl.BoardCategories;

public class EfCoreBoardCategoriesRepository(IDbContextProvider<IRpgOlDbContext> dbContextProvider) : EfCoreRepository<IRpgOlDbContext, BoardCategory, Guid>(dbContextProvider), IBoardCategoriesRepository
{
}
