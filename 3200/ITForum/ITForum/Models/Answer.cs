namespace ITForum.Models
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public string AnswerDate { get; set; } = string.Empty;
        public int UserId { get; set; }
        //navigation property
        public virtual User? User { get; set; } = default!;
        //navigation property
        public virtual List<OrderItem>? OrderItems { get; set; }
        public int AntallOrd { get; set; }
     }
}
