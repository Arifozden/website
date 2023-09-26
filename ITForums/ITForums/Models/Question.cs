using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace ITForums.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{2,20}", ErrorMessage = "The Name must be numbers or letters and between 2 to 20 characters.")]
        [Display(Name = "Question Title")]
        public string? Title { get; set; } = string.Empty;

        [Required]
        [StringLength(2000)]
        public string? Description { get; set; }

        
        public string? ImageUrl { get; set; }
        //navigation property
        public virtual List<OrderQuestion>? OrderQuestions { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "The Price must be greater than 0.")]
        public int Answer { get; set; }
        //Relations
        //public string? IdentityUserId { get; set; }
        //[ForeignKey("IdentityUserId")]
        //public IdentityUser? User { get; set; }
        //public List<Answer>? Answers { get; set; }

    }
}
