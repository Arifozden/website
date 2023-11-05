using System.ComponentModel.DataAnnotations.Schema;

namespace IFrm.Models
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public string AnswerContent { get; set; }

        //Relations
        public string? UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User? User { get; set; }

        public int? QuestId { get; set; }
        [ForeignKey("QuestId")]
        public virtual Quest? Quest { get; set; }

    }
}
