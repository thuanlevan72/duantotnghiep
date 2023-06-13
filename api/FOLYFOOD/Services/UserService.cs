using FOLYFOOD.Dto;
using FOLYFOOD.Dto.UserDto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers;
using FOLYFOOD.Hellers.imageChecks;
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

        public async Task<IQueryable<Account>> getListUser()
        {
            // lấy dữ liệu user nha 
            var listUser = DbContext.Accounts.AsNoTracking().Include(x => x.User).Where(x => x.DecentralizationId == 3);
            return listUser;
        }

        public async Task<Account> getOneUser(int id)
        {
            var user = await DbContext.Accounts.FirstOrDefaultAsync(x => x.AccountId == id);

            if (user == null || user.DecentralizationId != 3)
            {
                return null;
            }
            return user;
        }

        public async Task<Account> Register(RegisterRequets data)
        {
            if (data.UserName == "" || data.DecentralizationId == null || data.Password == "" || data.Status == null)
            {
                return null;
            }
            if (DbContext.Accounts.Any(x => x.UserName == data.UserName || x.Email == data.Email))
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
                Status = 1,
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
        public async Task<RetunObject<string>> updateImageAvatar(IFormFile file,int id)
        {
            Account userUpdate = await DbContext.Accounts.FirstOrDefaultAsync(x => x.AccountId == id);
            try
            {
                if (userUpdate == null)
                {
                    throw new Exception("thông tin người dùng không tồn tại");
                }
                int imageSize = 2 * 1024 * 1024; // tương ứng với 2mb
                bool checkImage = ImageChecker.IsImage(file, imageSize);

                if (!checkImage)
                {
                    throw new Exception("xử lý ảnh lỗi");
                }
            }
            catch (Exception ex)
            {
              return  new RetunObject<string>
                {
                    data = ex.Message,
                    mess = ex.Message,
                    statusCode = 400,
                };
                
            }
            await uplloadFile.DeleteFile(userUpdate.Avartar);
            string link = await uplloadFile.UploadFile(file);
            userUpdate.Avartar = link;
            DbContext.Accounts.Update(userUpdate);
            DbContext.SaveChanges();
            return new RetunObject<string>
            {
                data = link,
                mess = "ảnh gửi về",
                statusCode = 204,
            }; ;
        }
        public async Task<RetunObject<Account>> updateOneAccount(UserUpdateClient account, int id)
        {
            Account userUpdate = await DbContext.Accounts.FirstOrDefaultAsync(x => x.AccountId == id);
            User detailUser = await DbContext.Users.FirstOrDefaultAsync(y => y.AccountId == id);
            try
            {
                if (userUpdate == null)
                {
                    throw new Exception("thông tin người dùng không tồn tại");
                }
                if (string.IsNullOrEmpty(account.UserName) || string.IsNullOrEmpty(account.Address) || string.IsNullOrEmpty(account.Phone) || string.IsNullOrEmpty(account.Email))
                {
                    throw new Exception("các thông tin nhập vào chưa đầy đủ");
                }
               
            }
            catch (Exception ex)
            {
                return new RetunObject<Account>
                {
                    data = null,
                    mess = ex.Message,
                    statusCode = 400,
                };
            }
            detailUser.Address = account.Address;
            detailUser.Phone = account.Phone;
            detailUser.Email = account.Email;
            detailUser.UserName = account.UserName;

            DbContext.Users.Update(detailUser);
            DbContext.SaveChanges();
            return new RetunObject<Account>
            {
                data = await DbContext.Accounts.Include(x => x.User).FirstOrDefaultAsync(x => x.AccountId == id),
                mess = "thêm thành công",
                statusCode = 204,
            };


        }
    }
}
