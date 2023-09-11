using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Xunit;

namespace DonerSD.Models
{
    public class Register
    {
        [Required]
        [DisplayName("Navn")]
        public string Name { get; set; }

        [Required]
        [DisplayName("Etternavn")]
        public string SurName { get; set; }

        [Required]
        [DisplayName("Brukernavn")]
        public string UserName { get; set; }

        [Required]
        [DisplayName("E-post")]
        [EmailAddress(ErrorMessage = "E-post adresse er ikke godkjent!")]
        public string Email { get; set; }

        [Required]
        [DisplayName("Passord")]
        public string Password { get; set; }

        [Required]
        [DisplayName("Password igjen")]
        [System.ComponentModel.DataAnnotations.Compare("Password", ErrorMessage="passord ikke samme")]
        public string RePassword { get; set; }
    }
}