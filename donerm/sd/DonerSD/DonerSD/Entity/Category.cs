using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DonerSD.Entity
{
    public class Category
    {
        public int Id { get; set; }

        [DisplayName("Kategori Navn")]
        [StringLength(20,ErrorMessage = "maksimalt 20 tegn")]
        public string Name { get; set; }

        [DisplayName("Beskrivelse")]
        public string Description { get; set; }

        public List<Product> Products { get; set; }
    }
}