using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudRegAPI.Models
{
    public class StudentModel
    {
        [Key]
        public int StudentId { get; set; } 

        [Column(TypeName ="nvarchar(50)")]
        public string Name { get; set;} 

        [Column(TypeName = "nvarchar(50)")]
        public string Surname { get; set;}

        [Column(TypeName = "nvarchar(50)")]
        public string StudNumber { get; set;}

        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set;}

        [Column(TypeName = "nvarchar(50)")]
        public string Phone { get; set;}

        [Column(TypeName = "nvarchar(50)")]
        public string Course { get; set;}

        [Column(TypeName = "nvarchar(50)")]
        public string BeginYear { get; set;}

        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set;}

        [NotMapped]
        public IFormFile ImageFile { get; set;}

        [NotMapped]
        public string ImageSrc { get; set;}
    }
}
