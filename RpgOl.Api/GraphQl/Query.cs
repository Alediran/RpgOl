﻿using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using RpgOl.Dal;
using RpgOl.Domain;
using System.Linq;

namespace RpgOl.Api.GraphQl
{
    public class Query
    {
       public Query()
        { }

        [UseDbContext(typeof(DbContext))]
        public IQueryable<Board> Boards([ScopedService] DbContext dbContext) => dbContext.Boards;

        [UseDbContext(typeof(DbContext))]
        public IQueryable<User> Users([ScopedService] DbContext dbContext) => dbContext.Users;

        [UseDbContext(typeof(DbContext))]
        public IQueryable<Player> Players([ScopedService] DbContext dbContext) => dbContext.Players;
    }   
}
