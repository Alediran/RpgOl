using Microsoft.EntityFrameworkCore;
using RpgOl.BoardCategories;
using RpgOl.Boards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace RpgOl.EntityFrameworkCore
{
    [ConnectionStringName("Default")]
    public interface IRpgOlDbContext : IEfCoreDbContext
    {
        DbSet<Board> Boards { get; }
        DbSet<BoardCategory> BoardCategories { get; }
    }
}
