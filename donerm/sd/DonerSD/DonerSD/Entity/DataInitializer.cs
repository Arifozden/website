using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DonerSD.Entity
{
    public class DataInitializer:DropCreateDatabaseIfModelChanges<DataContext>
    {
        protected override void Seed(DataContext context)
        {
            var categories = new List<Category>()
            {
                new Category() { Name = "Tools", Description = "Tools and Machines" },
                new Category() { Name = "Building", Description = "Building and Painting" },
                new Category() { Name = "Electrical", Description = "Electrical Articles and Lighting" },
                new Category() { Name = "Clothes", Description = "Clothes and Shoes" },
                new Category() { Name = "Garden", Description = "garden" },
                new Category() { Name = "Hobby", Description = "Leisure time og Hobby" },
                new Category() { Name = "Andre", Description = "Andre" },
                new Category() { Name = "Car", Description = "Car and Garage" },
                new Category() { Name = "House", Description = "House and Household" },
                
            };

            foreach (var category in categories)
            {
                context.Categories.Add(category);
            }
            context.SaveChanges();

            var products = new List<Product>()
            {
                new Product()
                {
                    Name = "Skrutrekker ", Description = "Batteridrevet skrutrekker som leveres med batteri og lader!",
                    Price = 699, Stock = 1, IsApproved = true, CategoryId = 2, IsHome = true,Image = "1.jpg"
                },
                new Product()
                {
                    Name = "Oppbevaringsboks 15 l", Description = "Oppbevaringsboks i BPA-fri plast.", Price = 2990,
                    Stock = 1, IsApproved = true, CategoryId = 2,Image = "2.jpg"
                },
                new Product()
                {
                    Name = "Lyskaster ", Description = "Lyskaster LED IP65 100 W 13000 lm", Price = 249, Stock = 1,
                    IsApproved = true, CategoryId = 3, IsHome = true,Image = "3.jpg"
                },
                new Product()
                {
                    Name = "Skalljakke herre S", Description = "Skalljakke med høy vannsøyle", Price = 499, Stock = 1,
                    IsApproved = true, CategoryId = 4,Image = "4.jpg"
                },
                new Product()
                {
                    Name = "gresstrimmer ", Description = "Batteridrevet gresstrimmer OLT1832 18 V 30 cm", Price = 799,
                    Stock = 1, IsApproved = true, CategoryId = 5,Image = "5.jpg"
                },
                new Product()
                {
                    Name = "El-sykkel", Description = "El-sykkel e-street 28 36 V 10,4 Ah", Price = 10000, Stock = 1,
                    IsApproved = true, CategoryId = 6, IsHome = true,Image = "6.jpg"
                },
                new Product()
                {
                    Name = "Garasjejekk ", Description = "Garasjejekk 2,5 t 75-510 mm", Price = 1499, Stock = 1,
                    IsApproved = true, CategoryId = 7,Image = "7.jpg"
                },
                new Product()
                {
                    Name = "Skaftstøvsuger ", Description = "Skaftstøvsuger 2-i-1 BBHF216 16 V 36 min 0,4 l",
                    Price = 999, Stock = 1, IsApproved = true, CategoryId = 8, IsHome = true,Image = "8.jpg"
                },

            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();

            base.Seed(context);
        }
    }
}