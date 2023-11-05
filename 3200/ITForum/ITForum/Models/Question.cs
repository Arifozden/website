using Microsoft.Build.Framework;

namespace ITForum.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Title { get; set; }
        [Required]
        public string? Description { get; set; }
        public string Author { get; set; }
        public int AuthorId { get; set; }
        public string? Answers { get; set; }
        public string ImageUrl { get; set; }
        public virtual List<OrderItem>? OrderItems { get; set; }
    }
}
