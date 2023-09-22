namespace ITForums.Models
{
    public class OrderQuestion
    {
        public int OrderQuestionId { get; set; }
        public int QuestionId { get; set; }
        //navigation property
        public Question Question { get; set; } = default!;
        public int Quantity { get; set; }
        public int OrderId { get; set; }
        //navigation property
        public Order Order { get; set; } = default!;
        public decimal OrderQuestionPrice { get; set; }
    }
}
