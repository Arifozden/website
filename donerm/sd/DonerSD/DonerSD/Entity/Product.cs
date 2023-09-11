using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace DonerSD.Entity
{
    public class Product
    {
        public int Id { get; set; }

        [DisplayName("Produktnavn")]
        public string Name { get; set; }
        [DisplayName("Produktbeskrivelse")]
        public string Description { get; set; }
        [DisplayName("Pris")]
        public double Price { get; set; }
        [DisplayName("Lager status")]
        public int Stock { get; set; }
        [DisplayName("Bilde")]
        public string Image { get; set; }
        [DisplayName("PåHjemmeside")]
        public bool IsHome { get; set; }
        [DisplayName("Godkjent")]
        public bool IsApproved { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}