using Microsoft.EntityFrameworkCore;
using RpgOl.BoardCategories;
using RpgOl.Boards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace RpgOl.EntityFrameworkCore
{
    public static class RpgOlDbContextModelCreatingExtensions
    {
        public static void ConfigureRpgOl(this ModelBuilder builder, Action optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            builder.Entity<Board>(e =>
            {
                e.ToTable(nameof(Board));
                e.ConfigureByConvention();

                e.HasMany(p => p.BoardCategories).WithMany(p => p.Boards);
            });

            builder.Entity<BoardCategory>(e =>
            {
                e.ToTable(nameof(BoardCategory));
                e.ConfigureByConvention();
            });
        }
    }
}
