using Microsoft.AspNetCore.Identity;

namespace ITForums.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Content { get; set; }

        //Relations
        public string IdentityUserId { get; set; }
        //[ForeignKey("IdentityUserId")]
        public IdentityUser? User { get; set; }

        public int? QuestionID { get; set; }
        //[ForeignKey("QuestionId")]
        public Question Question { get; set; }
    }
}
