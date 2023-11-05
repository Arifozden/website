using System.Net.Mail;
using Microsoft.EntityFrameworkCore;

namespace ITForum.Models
{
    public class DBInit
    {
        public static void Seed(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.CreateScope();
            QuestionDbContext context = serviceScope.ServiceProvider.GetRequiredService<QuestionDbContext>();
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            if (!context.Questions.Any())
            {
                var questions = new List<Question>
            {
                new Question
                {
                    Title = "What is it?",
                    Description = "Question 1",
                    ImageUrl = "Kategori 1",
                    Answers = "Answer 1",
                    Author = "Author 1",
                    AuthorId = 1,
                },
                new Question
                {
                    Title = "How is it?",
                    Description = "Question 2.",
                    ImageUrl = "Kategori 2",
                    Answers = "Answer 2",
                    Author = "Author 2",
                    AuthorId = 2
                },
            };
                context.AddRange(questions);
                context.SaveChanges();
            }

            if (!context.Users.Any())
            {
                var users = new List<User>
                {
                    new User
                    {
                        UserName = "user 1",
                        Email = "mail@user.1"
                    },
                    new User
                    {
                        UserName = "user 2",
                        Email = "mail@user.2"
                    }
                };
                context.AddRange(users);
                context.SaveChanges();
            }

            if (!context.Answers.Any())
            {
                var answers = new List<Answer>
                {
                    new Answer
                    {
                        AnswerDate = "Answer 1",
                        AntallOrd = 22,
                        AnswerId = 1,
                        UserId = 1
                    },
                    new Answer
                    {
                        AnswerDate = "Answer 2",
                        AntallOrd = 33,
                        AnswerId = 2,
                        UserId = 1
                    }
                };
                context.AddRange(answers);
                context.SaveChanges();
            }

            if (!context.OrderItems.Any())
            {
                var orderItems = new List<OrderItem>
                {
                    
                };
                foreach (var orderItem in orderItems)
                {
                    var question = context.Questions.Find(orderItem.QuestionId);
                }
                context.AddRange(orderItems);
                context.SaveChanges();
            }

            var answersToUpdate = context.Answers.Include(a => a.OrderItems);
            foreach (var answer in answersToUpdate)
            {
                
            }
            context.SaveChanges();

        }
    }
}
