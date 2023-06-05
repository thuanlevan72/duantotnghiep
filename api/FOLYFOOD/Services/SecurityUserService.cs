using FOLYFOOD.Dto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers;
using FOLYFOOD.Hellers.imageChecks;
using Microsoft.EntityFrameworkCore;
using BCryptNet = BCrypt.Net.BCrypt;

namespace FOLYFOOD.Services
{
    public class SecurityUserService
    {
        public readonly Context DBContext;

        public SecurityUserService()
        {
            DBContext = new Context();
        }
        public async Task<Account> RegisterStaff(RegisterRequets data)
        {
            if (data.UserName == "" || data.Password == "")
            {
                return null;
            }
            if (DBContext.Accounts.Any(x => x.UserName == data.UserName || x.Email == data.Email))
            {
                return null;
            }
            int imageSize = 2 * 1024 * 1024;
            if (!ImageChecker.IsImage(data.Avatar, imageSize))
            {
                return null;
            };
            var avatarFile = data.Avatar;
            string imageUrl = await uplloadFile.UploadFile(avatarFile);
            // Mã hóa mật khẩu
            string hashedPassword = BCryptNet.HashPassword(data.Password);
            var res = new Account()
            {
                Password = hashedPassword,
                Avartar = imageUrl,
                Status = 1,
                DecentralizationId = 2,
                UserName = data.UserName,
                Email = data.Email,
            };

            await DBContext.Accounts.AddAsync(res);
            await DBContext.SaveChangesAsync();
            var staff = new Staff()
            {
                Email = data.Email,
                UserName = "",
                Phone = "",
                Address = "",
                AccountId = res.AccountId,

            };
            await DBContext.Staffs.AddAsync(staff);
            await DBContext.SaveChangesAsync();
            return res;
        }
        public async Task<Account> Register(RegisterRequets data)
        {
            if (data.UserName == ""  || data.Password == "")
            {
                return null;
            }
            if (DBContext.Accounts.Any(x => x.UserName == data.UserName || x.Email == data.Email))
            {
                return null;
            }
            int imageSize = 2 * 1024 * 1024;
            if (!ImageChecker.IsImage(data.Avatar, imageSize))
            {
                return null;
            };
            var avatarFile = data.Avatar;
            string imageUrl = await uplloadFile.UploadFile(avatarFile);
            // Mã hóa mật khẩu
            string hashedPassword = BCryptNet.HashPassword(data.Password);

            ////// Kiểm tra mật khẩu
            ////bool isPasswordCorrect = BCryptNet.Verify(password, hashedPassword);
            var res = new Account()
            {
                Password = hashedPassword,
                Avartar = imageUrl,
                Status = 1,
                DecentralizationId = 3,
                UserName = data.UserName,
                Email = data.Email,
            };

            await DBContext.Accounts.AddAsync(res);
            await DBContext.SaveChangesAsync();
            var user = new User()
            {
                Email = data.Email, 
                UserName = "",
                Phone = "",
                Address = "",
                AccountId = res.AccountId,

            };
            await DBContext.Users.AddAsync(user);
            await DBContext.SaveChangesAsync();
            return res;
        }
        public  Account checkLogin(string email,string password) 
        {
            Account account1 = DBContext.Accounts.Include(x=>x.Decentralization).FirstOrDefault(x=>x.Email == email);
            if(account1 == null)
            {
                return null;
            }
            bool isPasswordCorrect = BCryptNet.Verify(password, account1.Password);
            if (isPasswordCorrect)
            {
                return account1;
            }

            return null;
            

        }
    }
}
