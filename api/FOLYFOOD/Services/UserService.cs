using Azure.Core;
using FOLYFOOD.Dto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers;
using FOLYFOOD.IService;
using Microsoft.EntityFrameworkCore;
using BCryptNet = BCrypt.Net.BCrypt;

namespace FOLYFOOD.Services
{
    public class UserService : IUserService
    {
        private readonly Context DbContext;

        public UserService()
        {
            DbContext = new Context();
        }

        public async Task<List<Account>> getListUser()
        {
            var listUser = DbContext.Accounts.AsNoTracking().Include(x=>x.User).Where(x=>x.DecentralizationId == 3).ToList();
            return listUser;
        }

        public async Task<Account> Register(RegisterRequets data)
        {
            if(data.UserName == "" || data.DecentralizationId == null ||  data.Password == "" || data.Status == null)
            {
                return null;
            }
            if(DbContext.Accounts.Any(x=>x.UserName == data.UserName || x.Email == data.Email))
            {
                return null;
            }

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
                Status = data.Status,
                DecentralizationId = 3,
                UserName = data.UserName,
                Email = data.Email,
            };
            
            await DbContext.Accounts.AddAsync(res);
            await DbContext.SaveChangesAsync();
            var user = new User()
            {
                Email = data.Email,
                UserName = "",
                Phone = "",
                Address = "",
                AccountId = res.AccountId,

            };
            await DbContext.Users.AddAsync(user);  
            await DbContext.SaveChangesAsync();
            return res;
        }
    }
}
