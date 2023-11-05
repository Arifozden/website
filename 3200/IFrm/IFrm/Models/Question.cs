namespace IFrm.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public string User { get; set; }
        //navigation property
        public virtual List<Quest>? Quests { get; set; }
    }
}
