using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;
using RpgOl.BoardCategories;
using RpgOl.Boards;
using RpgOl.Characters;
using RpgOl.Database;
using RpgOl.Groups;
using RpgOl.Posts;
using RpgOl.Threads;
using System.Collections.Generic;

namespace RpgOl.EntityFrameworkCore;

public static class RpgOlDbContextModelCreatingExtensions
{
    public static void ConfigureRpgOl(this ModelBuilder builder, Action optionsAction = null)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<Board>(e =>
        {
            e.ToTable(DatabaseConsts.TablePrefix + nameof(Board));
            e.ConfigureByConvention();

            e.HasMany(q => q.BoardCategories)
                .WithMany( q => q.Boards)
                .UsingEntity<Dictionary<string, object>>(
                    "BoardCategories",                    
                    e => e.HasOne<BoardCategory>().WithMany().HasForeignKey("BoardCategoryId"),
                    e => e.HasOne<Board>().WithMany().HasForeignKey("BoardId"));
        });

        builder.Entity<BoardCategory>(e =>
        {
            e.ToTable(DatabaseConsts.TablePrefix + nameof(BoardCategory));
            e.ConfigureByConvention();

            e.HasMany(q => q.Boards)
                .WithMany(q => q.BoardCategories)
                .UsingEntity<Dictionary<string, object>>(
                    "BoardCategories",
                    e => e.HasOne<Board>().WithMany().HasForeignKey("BoardId"),
                    e => e.HasOne<BoardCategory>().WithMany().HasForeignKey("BoardCategoryId"));
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

            e.HasMany(t => t.Posts).WithOne().OnDelete(DeleteBehavior.NoAction);

            e.HasMany(q => q.Groups)
                .WithMany(q => q.Characters)
                .UsingEntity<Dictionary<string, object>>(
                    "GroupCharacters",
                    e => e.HasOne<Group>().WithMany().HasForeignKey("GroupId"),
                    r => r.HasOne<Character>().WithMany().HasForeignKey("CharacterId"));            
        });

        builder.Entity<Post>(e =>
        {
            e.ToTable(DatabaseConsts.TablePrefix + nameof(Post));
            e.ConfigureByConvention();
        });
    }
}
