using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;

namespace WebApi
{
    public class MemberController : ApiController
    {
        NorthwindEntities _db = new NorthwindEntities();

        /// <summary>
        /// Authenoticate Login
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult Login(string email, string password)
        {
            
            _db.Configuration.ProxyCreationEnabled = false;

            var member = _db.Members.FirstOrDefault(m => m.Email == email && m.Password == password);

            if (member == null)
            {
                return NotFound();
            }
            else
            {
                FormsAuthentication.SetAuthCookie(email, true);
                FormsAuthentication.RedirectFromLoginPage(email, false);
                member.LastLogedIn = DateTime.Now;
                _db.SaveChanges();

                return Ok();
            }
        }
        /// <summary>
        /// Register New Member
        /// </summary>
        /// <param name="data"></param>
        [HttpPost]
        public void RegisterNewMember(Member data)
        {
            var member = new Member();

            member.Email = data.Email;
            member.Password = data.Password;
            member.CreatedOn = DateTime.Now;

            _db.Members.Add(member);
            _db.SaveChanges();

        }

    }
}
