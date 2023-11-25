using Microsoft.EntityFrameworkCore;
using RpgOl.BoardCategories;
using RpgOl.Boards;
using RpgOl.Characters;
using RpgOl.Groups;
using RpgOl.Posts;
using RpgOl.Threads;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace RpgOl.EntityFrameworkCore;

[ConnectionStringName("Default")]
public interface IRpgOlDbContext : IEfCoreDbContext
{
    DbSet<Board> Boards { get; }
    DbSet<BoardCategory> BoardCategories { get; }
    DbSet<Thread> Threads { get; }
    DbSet<Group> Groups { get; }
    DbSet<Post> Posts { get; }
    DbSet<Character> Characters { get; }
}
