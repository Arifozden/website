using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace ITForums.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string? Title { get; set; }

        [Required]
        public string? Description { get; set; }

        
        public string? ImageUrl { get; set; }
        //navigation property
        public List<OrderQuestion>? OrderQuestions { get; set; }

        [Required]
        public string? Answer { get; set; }
        //Relations
        //public string? IdentityUserId { get; set; }
        //[ForeignKey("IdentityUserId")]
        //public IdentityUser? User { get; set; }
        //public List<Answer>? Answers { get; set; }

    }
}
