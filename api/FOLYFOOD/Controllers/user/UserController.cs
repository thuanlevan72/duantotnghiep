using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers.Pagination;
using FOLYFOOD.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FOLYFOOD.Controllers.user
{
    [Route("api/[controller]")]
    [ApiController, Authorize(Roles = "staff, admin")]
    public class UserController : ControllerBase
    {
        private readonly UserService userService;
        
        public UserController()
        {
            userService = new UserService();
        }
        

        [HttpGet]
        public async Task<IActionResult> Get(int page = 1, int pageSize = 10)
        {
            var accounts = await userService.getListUser();
            PagedResult<Account> pagedProducts = PaginationHelper.GetPagedData(accounts, page, pageSize);
            return Ok(pagedProducts);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
