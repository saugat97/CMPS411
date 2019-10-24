using Email.Services;
using LionUp.Data;
using LionUp.Models;
using LionUp.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace LionUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly LionUpContext _context;

        private readonly IEmailService _emailService;

        private IHostingEnvironment _environment;

        public AccountController(LionUpContext context, IEmailService emailService, IHostingEnvironment environment)
        {
            _context = context;
            _emailService = emailService;
            _environment = environment;
        }

        // GET: api/Users
        [HttpGet]
        public List<User> GetUsers()
        {
            return _context.User.ToList();
        }


        [HttpPost("register")]
        public IActionResult Register(User model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            model.Password = HashPassword(model.Password);
            model.MajorId = 1;
            model.UserRole = "Student";

            _context.User.Add(model);
            _context.SaveChanges();

            var projectRootPath = _environment.WebRootPath;

            var pathToFile = _environment.WebRootPath
                 + Path.DirectorySeparatorChar.ToString()
                 + "Template"
                 + Path.DirectorySeparatorChar.ToString()
                 + "EmailTemplate.html";

            string subject = "LionUp Registration";

            var builder = new BodyBuilder();

            using (StreamReader SourceReader = System.IO.File.OpenText(pathToFile))
            {

                builder.HtmlBody = SourceReader.ReadToEnd();
            }

            string messageBody = string.Format(builder.HtmlBody,
                   subject,
                   String.Format("{0:dddd, d MMMM yyyy}", DateTime.Now),
                   model.FirstName,
                   model.SeluEmail
                   );

            _emailService.SendEmail(model.SeluEmail, subject, messageBody);

            return Ok(model);
        }

        [HttpPost("email")]
        public int Email([FromBody] EmailCheckViewModel model)
        {
            var user = _context.User.SingleOrDefault(e => e.SeluEmail == model.SeluEmail);
            return user.Id;
        }

        [HttpPost("getUserByEmail")]
        public User GetUserByEmail([FromBody] EmailCheckViewModel model)
        {
            var getUser = _context.User.FirstOrDefault(a => a.SeluEmail == model.SeluEmail);
            return getUser;
        }

        [HttpGet("{id}")]
        public User GetUserById(int? id)
        {
            var user = _context.User.FirstOrDefault(b => b.Id == id);
            return user;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(model == null)
            {
                return Unauthorized();
            }

            var user = _context.User.SingleOrDefault(u => u.SeluEmail == model.Email);


            if (user != null)
            {
                if (!ValidateUser(user, model.Password))
                {
                    return Unauthorized();
                }
                else
                {

                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey2019"));
                    var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256Signature);

                    var token = new JwtSecurityToken(
                            issuer: "mysite.com",
                            audience: "mysite.com",
                            claims: new Claim[] {
                                new Claim(ClaimTypes.Email, user.SeluEmail)
                            },
                            expires: DateTime.Now.AddMinutes(10),
                            signingCredentials: signingCredentials
                        );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                    return Ok(new { Token = tokenString });
                }
            }
            else
            {
                return Unauthorized();
            }

        }

       

        [NonAction]
        public string HashPassword(string password)
        {
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

            var bytes = new Rfc2898DeriveBytes(password, salt, 10000);
            byte[] hash = bytes.GetBytes(20);
            byte[] hashBytes = new byte[36];

            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            return Convert.ToBase64String(hashBytes);
        }

        [NonAction]
        public bool ValidateUser(User user, string password)
        {
            byte[] salt = new byte[16];

            byte[] hashBytes = Convert.FromBase64String(user.Password);
            Array.Copy(hashBytes, 0, salt, 0, 16);

            var bytes = new Rfc2898DeriveBytes(password, salt, 10000);
            byte[] hash = bytes.GetBytes(20);

            for (int i = 0; i < 20; ++i)
            {
                if (hashBytes[i + 16] != hash[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}