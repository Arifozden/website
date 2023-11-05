using System.ComponentModel.DataAnnotations.Schema;

namespace IFrm.Models
{
    public class Quest
    {
        public int QuestId { get; set;}
        public string QuestTitle { get; set;}
        public string QuestDescription { get; set;}

        //Relations
        public string? UserId { get; set;}
        [ForeignKey("UserId")]
        public virtual User? User { get; set;}
        public virtual List<Answer>? Answers { get; set;}
    }
}
