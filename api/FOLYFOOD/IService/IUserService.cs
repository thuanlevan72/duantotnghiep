using FOLYFOOD.Dto;
using FOLYFOOD.Entitys;

namespace FOLYFOOD.IService
{
    public interface IUserService
    {
        public Task<Account> Register(RegisterRequets data);
    }
}
