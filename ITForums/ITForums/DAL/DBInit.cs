using ITForums.Models;
using Microsoft.EntityFrameworkCore;

namespace ITForums.DAL;

public static class DBInit
{
    public static void Seed(IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();
        var context = serviceScope.ServiceProvider.GetRequiredService<QuestionDbContext>();
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();

        if (!context.Questions.Any())
        {
            var items = new List<Question>
            {
                new Question
                {
                    Title = "Pizza",
                    Answer = 150,
                    Description = "Delicious Italian dish with a thin crust topped with tomato sauce, cheese, and various toppings.",
                    ImageUrl = "/images/pizza.jpg"
                },
                new Question
                {
                    Title = "Fried Chicken Leg",
                    Answer = 20,
                    Description = "Crispy and succulent chicken leg that is deep-fried to perfection, often served as a popular fast food item.",
                    ImageUrl = "/images/coke.jpg"
                },
                new Question
                {
                    Title = "French Fries",
                    Answer = 50,
                    Description = "Crispy, golden-brown potato slices seasoned with salt and often served as a popular side dish or snack.",
                    ImageUrl = "/images/coke.jpg"
                },
                new Question
                {
                    Title = "Grilled Ribs",
                    Answer = 250,
                    Description = "Tender and flavorful ribs grilled to perfection, usually served with barbecue sauce.",
                    ImageUrl = "/images/ribs.jpg"
                },
                new Question
                {
                    Title = "Tacos",
                    Answer = 150,
                    Description = "Tortillas filled with various ingredients such as seasoned meat, vegetables, and salsa, folded into a delicious handheld meal.",
                    ImageUrl = "/images/tacos.jpg"
                },
                new Question
                {
                    Title = "Fish and Chips",
                    Answer = 180,
                    Description = "Classic British dish featuring battered and deep-fried fish served with thick-cut fried potatoes.",
                    ImageUrl = "/images/coke.jpg"
                },
                new Question
                {
                    Title = "Cider",
                    Answer = 50,
                    Description = "Refreshing alcoholic beverage made from fermented apple juice, available in various flavors.",
                    ImageUrl = "/images/cider.jpg"
                },
                new Question
                {
                    Title = "Coke",
                    Answer = 30,
                    Description = "Popular carbonated soft drink known for its sweet and refreshing taste.",
                    ImageUrl = "/images/coke.jpg"
                },
            };
            context.AddRange(items);
            context.SaveChanges();
        }

        if (!context.Customers.Any())
        {
            var customers = new List<Customer>
            {
                new Customer { Name = "Alice Hansen", Address = "Osloveien 1"},
                new Customer { Name = "Bob Johansen", Address = "Oslomet gata 2"},
            };
            context.AddRange(customers);
            context.SaveChanges();
        }

        if (!context.Orders.Any())
        {
            var orders = new List<Order>
            {
                new Order {OrderDate = DateTime.Today.ToString(), CustomerId = 1,},
                new Order {OrderDate = DateTime.Today.ToString(), CustomerId = 2,},
            };
            context.AddRange(orders);
            context.SaveChanges();
        }

        if (!context.OrderQuestions.Any())
        {
            var orderItems = new List<OrderQuestion>
            {
                new OrderQuestion { QuestionId = 1, Quantity = 2, OrderId = 1},
                new OrderQuestion { QuestionId = 2, Quantity = 1, OrderId = 1},
                new OrderQuestion { QuestionId = 3, Quantity = 4, OrderId = 2},
            };
            foreach (var orderItem in orderItems)
            {
                var item = context.Questions.Find(orderItem.QuestionId);
                orderItem.OrderQuestionPrice = orderItem.Quantity * item?.Answer ?? 0;
            }
            context.AddRange(orderItems);
            context.SaveChanges();
        }

        var ordersToUpdate = context.Orders.Include(o => o.OrderQuestions);
        foreach (var order in ordersToUpdate)
        {
            order.TotalPrice = order.OrderQuestions?.Sum(oi => oi.OrderQuestionPrice) ?? 0;
        }
        context.SaveChanges();
    }
}
