using FOLYFOOD.Dto;
using FOLYFOOD.Dto.NewFolder;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers.Pagination;
using FOLYFOOD.Services.Contact;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FOLYFOOD.Controllers.contact
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private protected ContactService contactService;

        public ContactController() { 
            contactService = new ContactService();
        }
        // GET: api/<ContactController>
        [HttpGet]
        public IActionResult Get(int page = 1, int pageSize = 10)
        {
            var data = contactService.getDataContact();
            var res = PaginationHelper.GetPagedData(data.data, page, pageSize);
            RetunObject<PagedResult<Contact>> test = new RetunObject<PagedResult<Contact>>()
            {
                data = res,
                mess = res.Data.Count()  > 0 ? "đã lấy được dữ liệu" : "không có data",
                statusCode = 200,
            };
            return Ok(test);
        }

        // GET api/<ContactController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(contactService.GetOneContact(id));
        }

        // POST api/<ContactController>
        [HttpPost]
        public IActionResult Post([FromBody] ContactDto data)
        {
            RetunObject<Contact> res = contactService.addContact(data);
            if (res.errorOccurred)
            {
                return BadRequest(res);
            }
            return Ok(res);
        }
        [HttpPost("reply-contact")]
        public IActionResult replyContact(string mess, string email)
        {
            RetunObject<Contact> res = contactService.replyToContact(email,mess);
            if (res.errorOccurred)
            {
                return BadRequest(res);
            }
            return Ok(res);
        }

        // PUT api/<ContactController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
