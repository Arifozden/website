using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DonerSD.Models
{
    public class ShippingDetails
    {
        public string Username { get; set; }

        [Required(ErrorMessage = "Vennligst skriv adressetittel!")]
        public string AdresseTittel { get; set; }
        [Required(ErrorMessage = "Vennligst skriv adresse!")]
        public string Adresse { get; set; }
        [Required(ErrorMessage = "Vennligst skriv postnummer!")]
        public string PostNummer { get; set; }
        [Required(ErrorMessage = "Vennligst skriv sted!")]
        public string PostSted { get; set; }
        [Required(ErrorMessage = "Vennligst skriv kommune!")]
        public string Kommune { get; set; }
        
        
        
    }
}