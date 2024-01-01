namespace IFrm.Models
{
    public class User
    {
        public string UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; }
        public virtual List<Question>? Questions { get; set; }
        public virtual  List<Quest>? Quests { get; set; }
        public virtual List<Answer>? Answers { get; set; }
    }
}
