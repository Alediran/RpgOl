﻿namespace RpgOl.Domain
{
    public interface IEntity<TKey>
    {
        TKey Id { get; }
    }
}
