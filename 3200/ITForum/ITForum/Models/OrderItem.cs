namespace ITForum.Models
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }
        public int QuestionId { get; set; }
        //navigation property
        public virtual Question Question { get; set; } = default!;
        public int Quantity { get; set; }
        public int AnswerId { get; set; }
        public virtual Answer Answer { get; set; }
        public int AntallAnswer { get; set; }
    }
}