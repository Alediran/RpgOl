CREATE TABLE [dbo].[BoardsPlayers]
(
	[BoardId] UNIQUEIDENTIFIER NOT NULL , 
    [PlayerId] UNIQUEIDENTIFIER NOT NULL, 
    PRIMARY KEY ([BoardId], [PlayerId])
)
