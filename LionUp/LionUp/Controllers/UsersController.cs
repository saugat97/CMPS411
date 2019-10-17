using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LionUp.Data;
using LionUp.Models;

namespace LionUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly LionUpContext _context;

        public UsersController(LionUpContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public List<User> GetUsers()
        {
            return _context.User.ToList();
        }
    }
}
