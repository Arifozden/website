using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Univ.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    StudentEmail = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    StudentMobil = table.Column<string>(type: "nvarchar(14)", nullable: false),
                    CourseName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    BeginYear = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    PhotoFileName = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.StudentId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
