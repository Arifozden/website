using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DonerSD.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace DonerSD.Identity
{
    public class IdentityDataContext:IdentityDbContext<ApplicationUser>
    {
        public IdentityDataContext() : base("dataConnection")
        {

        }
    }
}