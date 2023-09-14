using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DonerSD.Entity;
using DonerSD.Models;

namespace DonerSD.Controllers
{
    [Authorize(Roles = "admin")]
    public class OrderController : Controller
    {

        DataContext db = new DataContext();

        // GET: Order
        public ActionResult Index()
        {

            var orders = db.Orders.Select(i=> new AdminOrderModel()
            {
                Id = i.Id,
                OrderNumber = i.OrderNumber,
                OrderDate = i.OrderDate,
                OrderState = i.OrderState,
                Count = i.Orderlines.Count,
                Total = i.Total,
            }).OrderByDescending(i=>i.OrderDate).ToList();

            return View(orders);
        }

        public ActionResult Details(int id)
        {

        }
    }
}