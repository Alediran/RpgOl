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
                .WithMany()
                .UsingEntity("BoardCategories",
                    l => l.HasOne(typeof(Board)).WithMany().HasForeignKey("BoardId").HasPrincipalKey(nameof(Board.Id)),
                    r => r.HasOne(typeof(BoardCategory)).WithMany().HasForeignKey("BoardCategoryId").HasPrincipalKey(nameof(BoardCategory.Id)),
                    j => j.HasKey("BoardCategoryId", "BoardId"));
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

            e.HasMany(t => t.Posts).WithOne().OnDelete(DeleteBehavior.NoAction);

            e.HasMany(t => t.Groups)
                .WithMany()
                .UsingEntity("GroupCharacters",
                    l => l.HasOne(typeof(Character)).WithMany().HasForeignKey("CharacterId").HasPrincipalKey(nameof(Character.Id)),
                    r => r.HasOne(typeof(Group)).WithMany().HasForeignKey("GroupId").HasPrincipalKey(nameof(Group.Id)),
                    j => j.HasKey("GroupId", "CharacterId"));            
        });

        builder.Entity<Post>(e =>
        {
            e.ToTable(DatabaseConsts.TablePrefix + nameof(Post));
            e.ConfigureByConvention();
        });
    }
}
