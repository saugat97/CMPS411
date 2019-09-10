using LionUp.Data;
using LionUp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LionUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly LionUpContext _context;

        public AccountController(LionUpContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public int Register(User model)
        {
            var user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                SeluEmail = model.SeluEmail,
                Password = model.Password,
                MajorId = 1,
                RoleId = 1
            };
            _context.User.Add(user);
            _context.SaveChanges();

            return 1;
        }

        [HttpPost("token")]
        public ActionResult GetToken()
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey2019"));
            var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256Signature);

            var token = new JwtSecurityToken(
                    issuer: "mysite.com",
                    audience: "mysite.com",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(10),
                    signingCredentials: signingCredentials
                );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
            return Ok(new { Token = tokenString });
        }
    }
}