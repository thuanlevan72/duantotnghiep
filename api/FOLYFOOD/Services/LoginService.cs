using FOLYFOOD.Entitys;
using Microsoft.EntityFrameworkCore;
using BCryptNet = BCrypt.Net.BCrypt;

namespace FOLYFOOD.Services
{
    public class LoginService
    {
        public readonly Context DBContext;

        public LoginService()
        {
            DBContext = new Context();
        }

        public  Account checkLogin(string username,string password) 
        {
            Account account1 = DBContext.Accounts.Include(x=>x.Decentralization).FirstOrDefault(x=>x.UserName == username);
            bool isPasswordCorrect = BCryptNet.Verify(password, account1.Password);
            if (isPasswordCorrect)
            {
                return account1;
            }

            return null;
            

        }
    }
}
