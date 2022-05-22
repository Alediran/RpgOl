using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RpgOl.Migrations
{
    public partial class CoreEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RpgOlBoard",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<int>(type: "int", nullable: false),
                    GameSystem = table.Column<int>(type: "int", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgOlBoard", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RpgOlBoardCategory",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgOlBoardCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RpgOlCharacter",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BoardId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgOlCharacter", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RpgOlCharacter_RpgOlBoard_BoardId",
                        column: x => x.BoardId,
                        principalTable: "RpgOlBoard",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RpgOlThread",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BoardId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgOlThread", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RpgOlThread_RpgOlBoard_BoardId",
                        column: x => x.BoardId,
                        principalTable: "RpgOlBoard",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BoardBoardCategory",
                columns: table => new
                {
                    BoardCategoriesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BoardsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoardBoardCategory", x => new { x.BoardCategoriesId, x.BoardsId });
                    table.ForeignKey(
                        name: "FK_BoardBoardCategory_RpgOlBoard_BoardsId",
                        column: x => x.BoardsId,
                        principalTable: "RpgOlBoard",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BoardBoardCategory_RpgOlBoardCategory_BoardCategoriesId",
                        column: x => x.BoardCategoriesId,
                        principalTable: "RpgOlBoardCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RpgOlGroup",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BoardId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CharacterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgOlGroup", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RpgOlGroup_RpgOlBoard_BoardId",
                        column: x => x.BoardId,
                        principalTable: "RpgOlBoard",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RpgOlGroup_RpgOlCharacter_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "RpgOlCharacter",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "RpgOlPost",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ThreadId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CharacterId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Body = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgOlPost", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RpgOlPost_RpgOlThread_ThreadId",
                        column: x => x.ThreadId,
                        principalTable: "RpgOlThread",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BoardBoardCategory_BoardsId",
                table: "BoardBoardCategory",
                column: "BoardsId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlCharacter_BoardId",
                table: "RpgOlCharacter",
                column: "BoardId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlGroup_BoardId",
                table: "RpgOlGroup",
                column: "BoardId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlGroup_CharacterId",
                table: "RpgOlGroup",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlPost_ThreadId",
                table: "RpgOlPost",
                column: "ThreadId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlThread_BoardId",
                table: "RpgOlThread",
                column: "BoardId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BoardBoardCategory");

            migrationBuilder.DropTable(
                name: "RpgOlGroup");

            migrationBuilder.DropTable(
                name: "RpgOlPost");

            migrationBuilder.DropTable(
                name: "RpgOlBoardCategory");

            migrationBuilder.DropTable(
                name: "RpgOlCharacter");

            migrationBuilder.DropTable(
                name: "RpgOlThread");

            migrationBuilder.DropTable(
                name: "RpgOlBoard");
        }
    }
}
