using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi
{
    //[Authorize]
    public class CustomerController : ApiController
    {
        NorthwindEntities _db = new NorthwindEntities();

        /// <summary>
        /// GET CUSTOMER LIST
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult Customer()
        {
            _db.Configuration.ProxyCreationEnabled = false;

            var customer = _db.Customers;

            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        /// <summary>
        /// GET CUSTOMER BY ID
        /// </summary>
        /// <param name="customerID">Customer ID</param>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult Customer(string id)
        {
            _db.Configuration.ProxyCreationEnabled = false;

            var customer = _db.Customers.FirstOrDefault(c => c.CustomerID == id);

            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        /// <summary>
        /// Update Customer
        /// </summary>
        /// <param name="data"></param>
        /// <param name="customerID">Customer ID</param>
        [HttpPut]
        public void Customer(Customer data, string customerID)
        {

            if (data.CustomerID == customerID)
            {
                _db.Entry(data).State = EntityState.Modified;
                _db.SaveChanges();
            }

        }

        /// <summary>
        /// DELETE CUSTOMER
        /// </summary>
        /// <param name="customerID">Customer ID</param>
        [HttpDelete]
        public void Customer(string customerID, string nothing = null)
        {
            Customer customer = _db.Customers.Find(customerID);

            if (customer != null)
            {
                _db.Customers.Remove(customer);
                _db.SaveChanges();
            }
        }

        /// <summary>
        /// ADD NEW CUSTOMER
        /// </summary>
        /// <param name="customer"></param>
        [HttpPost]
        public void Customer(Customer customer)
        {
            _db.Customers.Add(customer);
            _db.SaveChanges();

        }

    }
}
