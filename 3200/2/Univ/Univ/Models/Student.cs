using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Univ.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string StudentName { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string StudentEmail { get; set; } = "";

        [Column(TypeName = "nvarchar(14)")]
        public string StudentMobil { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string CourseName { get; set; } = "";

        [Column(TypeName = "nvarchar(4)")]
        public string BeginYear { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string PhotoFileName { get; set; } = "";
    }
}
