namespace ITForum.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        //navigation property
        public virtual List<Answer>? Answers { get; set; }
    }
}
