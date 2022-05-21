using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RpgOl.BoardCategories;
using RpgOl.Boards;
using RpgOl.Characters;
using RpgOl.Database;
using RpgOl.Groups;
using RpgOl.Posts;
using RpgOl.Threads;
using System;
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

                e.HasMany(p => p.BoardCategories).WithMany(p => p.Boards);
                e.HasMany(p => p.Groups).WithOne().HasForeignKey(f => f.BoardId);
                e.HasMany(p => p.Threads).WithOne().HasForeignKey(f => f.BoardId);
                e.HasMany(p => p.Characters).WithOne().HasForeignKey(f => f.BoardId);
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

                e.HasMany(p => p.Threads).WithOne().HasForeignKey(f => f.GroupId);
            });

            builder.Entity<Thread>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Thread));
                e.ConfigureByConvention();

                e.HasMany(p => p.Posts).WithOne().HasForeignKey(f => f.ThreadId);
            });

            builder.Entity<Character>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Character));
                e.ConfigureByConvention();

                e.HasMany(p => p.Groups).WithMany(p => p.Characters);
                e.HasMany(p => p.Posts).WithOne().HasForeignKey(f => f.CharacterId);
                
            });

            builder.Entity<Post>(e =>
            {
                e.ToTable(DatabaseConsts.TablePrefix + nameof(Post));
                e.ConfigureByConvention();
            });
        }
    }
}
