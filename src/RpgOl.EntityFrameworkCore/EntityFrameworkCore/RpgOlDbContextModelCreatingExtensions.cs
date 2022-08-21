using Microsoft.EntityFrameworkCore;
using RpgOl.BoardCategories;
using RpgOl.Boards;
using RpgOl.Characters;
using RpgOl.Database;
using RpgOl.Groups;
using RpgOl.Posts;
using RpgOl.Threads;
using System;
using System.Collections.Generic;
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
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Board));
                e.ConfigureByConvention();

                e.HasMany(e => e.BoardCategories).WithMany(e => e.Boards);
            });

            builder.Entity<BoardCategory>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(BoardCategory));
                e.ConfigureByConvention();
            });

            builder.Entity<Group>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Group));
                e.ConfigureByConvention();                
            });

            builder.Entity<Thread>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Thread));
                e.ConfigureByConvention();
            });

            builder.Entity<Character>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Character));
                e.ConfigureByConvention();

                e.HasMany(t => t.Groups).WithMany(t => t.Characters);
            });

            builder.Entity<Post>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Post));
                e.ConfigureByConvention();
            });
        }
    }
}
