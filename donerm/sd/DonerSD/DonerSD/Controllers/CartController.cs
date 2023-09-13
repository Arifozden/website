using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DonerSD.Entity;
using DonerSD.Models;

namespace DonerSD.Controllers
{
    public class CartController : Controller
    {
        private DataContext db = new DataContext();
        // GET: Cart
        public ActionResult Index()
        {
            return View(GetCart());
        }

        public ActionResult AddToCart(int Id)
        {
            var product = db.Products.FirstOrDefault(i => i.Id == Id);

            if (product != null)
            {
                GetCart().AddProduct(product,1);
            }
            return RedirectToAction("Index");
        }

        public ActionResult RemoveFromCart(int Id)
        {
            var product = db.Products.FirstOrDefault(i => i.Id == Id);

            if (product != null)
            {
                GetCart().DeleteProduct(product);
            }
            return RedirectToAction("Index");
        }

        public Cart GetCart()
        {
            var cart = (Cart)Session["Cart"];

            if (cart == null)
            {
                cart = new Cart();
                Session["Cart"] = cart;
            }
            return cart;
        }

        public PartialViewResult Summary()
        {
            return PartialView(GetCart());
        }

        [Authorize]
        public ActionResult CheckOut()
        {
            return View(new ShippingDetails());
        }

        [Authorize]
        [HttpPost]
        public ActionResult CheckOut(ShippingDetails entity)
        {
            var cart = GetCart();

            if (cart.CartLines.Count == 0)
            {
                ModelState.AddModelError("IngentingError","Ingenting i handlekurv");
            }

            if (ModelState.IsValid)
            {
                //siparisi veritabanina kaydet
                // cart i sifirla
                cart.Clear();
                return View("Completed");
            }
            else
            {
                return View(entity);
            }
        }
    }
}