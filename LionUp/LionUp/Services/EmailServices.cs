using System.Net;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MimeKit;
using MailKit.Net.Smtp;

namespace Email.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Task SendEmail(string email,
                              string subject,
                              string message)
        {
            using (var client = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = _configuration["Email:Email"],
                    Password = _configuration["Email:Password"]
                };

                var smtpServer = _configuration["Email:Host"];
                var port = int.Parse(_configuration["Email:Port"]);

                var emailMessage = new MimeMessage();

                emailMessage.To.Add(new MailboxAddress(email, email));
                emailMessage.From.Add(new MailboxAddress
                        (credential.UserName,
                        credential.UserName));
                emailMessage.Subject = subject;
                emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
                {
                    Text = message
                };

                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate(
                    credential.UserName,  //Enter your email here
                    credential.Password //Enter your Password here.
                    );
                 client.Send(emailMessage);
                 client.Disconnect(true);
            }

             return Task.CompletedTask;
        }
    }
}