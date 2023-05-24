using FOLYFOOD.Entitys;
using Microsoft.EntityFrameworkCore;

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
            Account account1 = DBContext.Accounts.Include(x=>x.Decentralization).FirstOrDefault(x=>x.UserName == username && x.Password == password);
            return account1;

        }
    }
}
