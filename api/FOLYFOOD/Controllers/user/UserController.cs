using FOLYFOOD.Dto;
using FOLYFOOD.Dto.UserDto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers.imageChecks;
using FOLYFOOD.Hellers.Mail;
using FOLYFOOD.Hellers.Pagination;
using FOLYFOOD.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FOLYFOOD.Controllers.user
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService userService;
        
        public UserController()
        {
            userService = new UserService();
        }
        

        [HttpGet, Authorize(Roles = "staff, admin")]
        public async Task<IActionResult> Get(int page = 1, int pageSize = 10)
        {
            var accounts = await userService.getListUser();
            var res = PaginationHelper.GetPagedData(accounts, page, pageSize);
            RetunObject<PagedResult<Account>> test  =new RetunObject<PagedResult<Account>>()
            {
                data = res,
                mess = res.Data.Count() > 0 ? "đã lấy được dữ liệu" : "không có data",
                statusCode = 200,
            };
            return Ok(test);
        }
        [HttpGet("/sendMail")]
        public async Task<IActionResult> sendMail(string mailTo, string Subject)
        {
          string str = SendMail.send(mailTo, Template1.temlapteHtmlMail(), Subject);
           return Ok(str);
        }
        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await userService.getOneUser(id);
            if(user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromForm] UserUpdateClient value)
        {
            RetunObject<Account> data = await userService.updateOneAccount(value, id);
            return Ok(data);
        }
        [HttpPut("update_avatar/{id}")]
        public async Task<IActionResult> PutImageAvatar(int id, IFormFile Avatar)
        {
            RetunObject<string> link = await userService.updateImageAvatar(Avatar, id);
            return Ok(link);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
