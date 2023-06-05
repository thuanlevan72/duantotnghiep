using System;
using System.Net;
using System.Net.Mail;

class Program
{
    static void Main(string[] args)
    {
        // Cấu hình thông tin máy chủ SMTP
        var smtpClient = new SmtpClient("smtp.example.com")
        {
            Port = 587,
            Credentials = new NetworkCredential("thuanlevan72@gmail.com", "@Anh123anh"),
            EnableSsl = true
        };

        try
        {
            // Tạo đối tượng MailMessage
            var message = new MailMessage();
            message.From = new MailAddress("thuanlevan72@gmail.com");
            message.To.Add("thuanlevan725@gmail.com");
            message.Subject = "Test Email";
            message.Body = "This is a test email.";

            // Gửi email
            smtpClient.Send(message);

            Console.WriteLine("Email đã được gửi thành công.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Lỗi khi gửi email: " + ex.Message);
        }
    }
}
