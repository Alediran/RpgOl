using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RpgOl.Migrations
{
    public partial class InitialData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                INSERT INTO AbpRoles(ID, Name, NormalizedName, IsDefault, IsStatic, IsPublic)
                VALUES(NEWID(), 'Administrator', 'Administrator', 0, 0, 0);
                
                INSERT INTO AbpUserRoles(UserId, RoleId)
                VALUES((SELECT Id From AbpUsers WHERE UserName = 'Alediran'), (Select Id From AbpRoles WHERE Name = 'Administrator'))
            ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
