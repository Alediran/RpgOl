using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RpgOl.Migrations
{
    public partial class GroupCharacters : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RpgOlGroup_RpgOlCharacter_CharacterId",
                table: "RpgOlGroup");

            migrationBuilder.DropForeignKey(
                name: "FK_RpgOlPost_RpgOlCharacter_CharacterId",
                table: "RpgOlPost");

            migrationBuilder.DropIndex(
                name: "IX_RpgOlGroup_CharacterId",
                table: "RpgOlGroup");

            migrationBuilder.DropColumn(
                name: "CharacterId",
                table: "RpgOlGroup");

            migrationBuilder.CreateTable(
                name: "CharacterGroup",
                columns: table => new
                {
                    CharactersId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GroupsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterGroup", x => new { x.CharactersId, x.GroupsId });
                    table.ForeignKey(
                        name: "FK_CharacterGroup_RpgOlCharacter_CharactersId",
                        column: x => x.CharactersId,
                        principalTable: "RpgOlCharacter",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_CharacterGroup_RpgOlGroup_GroupsId",
                        column: x => x.GroupsId,
                        principalTable: "RpgOlGroup",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CharacterGroup_GroupsId",
                table: "CharacterGroup",
                column: "GroupsId");

            migrationBuilder.AddForeignKey(
                name: "FK_RpgOlPost_RpgOlCharacter_CharacterId",
                table: "RpgOlPost",
                column: "CharacterId",
                principalTable: "RpgOlCharacter",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RpgOlPost_RpgOlCharacter_CharacterId",
                table: "RpgOlPost");

            migrationBuilder.DropTable(
                name: "CharacterGroup");

            migrationBuilder.AddColumn<Guid>(
                name: "CharacterId",
                table: "RpgOlGroup",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlGroup_CharacterId",
                table: "RpgOlGroup",
                column: "CharacterId");

            migrationBuilder.AddForeignKey(
                name: "FK_RpgOlGroup_RpgOlCharacter_CharacterId",
                table: "RpgOlGroup",
                column: "CharacterId",
                principalTable: "RpgOlCharacter",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RpgOlPost_RpgOlCharacter_CharacterId",
                table: "RpgOlPost",
                column: "CharacterId",
                principalTable: "RpgOlCharacter",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
