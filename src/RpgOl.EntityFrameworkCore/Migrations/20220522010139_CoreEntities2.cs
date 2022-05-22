using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RpgOl.Migrations
{
    public partial class CoreEntities2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "CharacterId",
                table: "RpgOlPost",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.CreateIndex(
                name: "IX_RpgOlPost_CharacterId",
                table: "RpgOlPost",
                column: "CharacterId");

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

            migrationBuilder.DropIndex(
                name: "IX_RpgOlPost_CharacterId",
                table: "RpgOlPost");

            migrationBuilder.AlterColumn<Guid>(
                name: "CharacterId",
                table: "RpgOlPost",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);
        }
    }
}
