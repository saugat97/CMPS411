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

        [HttpPost("register")]
        public IActionResult Register(User model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

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
            

            if(user!= null)
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

            else
            {
                return Unauthorized();
            }

        }
    }
}