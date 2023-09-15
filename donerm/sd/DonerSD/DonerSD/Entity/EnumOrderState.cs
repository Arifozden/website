using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DonerSD.Entity
{
    public enum EnumOrderState
    {
        [Display(Name = "Venting")]
        Waiting,
        [Display(Name = "Sendt")]
        Sent,
        [Display(Name = "Fullført")]
        Completed
    }
}