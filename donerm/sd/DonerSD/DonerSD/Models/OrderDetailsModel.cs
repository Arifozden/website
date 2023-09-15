using DonerSD.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DonerSD.Models
{
    public class OrderDetailsModel
    {
        public int OrderId { get; set; }
        public string Username { get; set; }
        public string OrderNumber { get; set; }
        public double Total { get; set; }
        public DateTime OrderDate { get; set; }
        public EnumOrderState OrderState { get; set; }

        public string AdresseTittel { get; set; }
        public string Adresse { get; set; }
        public string PostNummer { get; set; }
        public string PostSted { get; set; }
        public string Kommune { get; set; }

        public virtual List<OrderLineModel> Orderlines { get; set; }
    }

    public class OrderLineModel
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Image { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }
}