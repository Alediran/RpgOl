using System;
using Volo.Abp.Domain.Repositories;

namespace RpgOl.BoardCategories
{
    public interface IBoardCategoriesRepository : IRepository<BoardCategory, Guid>
    {        
    }
}
