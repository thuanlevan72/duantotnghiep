﻿using FOLYFOOD.Dto;
using FOLYFOOD.Dto.InfoDto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers.Pagination;
using FOLYFOOD.Services.Info;
using FOLYFOOD.Services.product;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FOLYFOOD.Controllers.info
{
    [Route("api/[controller]")]
    [ApiController]
    public class InfoController : ControllerBase
    {
        private protected InfoServicer infoServicer;

        public InfoController()
        {
            infoServicer = new InfoServicer();
        }
        // GET: api/<InfoController>
        [HttpGet]
        public async Task<IActionResult> Get(int page = 1, int pageSize = 10)
        {
            IQueryable<Info> data = await infoServicer.getAllInfo();
            var res = PaginationHelper.GetPagedData<Info>(data, page, pageSize);
            RetunObject<PagedResult<Info>> dataProduct = new RetunObject<PagedResult<Info>>()
            {
                data = res,
                mess = res.Data.Count() > 0 ? "đã lấy được dữ liệu" : "không có data",
                statusCode = 200,
            };
            return Ok(dataProduct);
        }

        // GET api/<InfoController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            RetunObject<Info> res = await infoServicer.getInfo(id);
            if (res.errorOccurred)
            {
                return NotFound(res);
            }
            return Ok(res); ;
        }

        // POST api/<InfoController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] InfoRequets value)
        {
            RetunObject<Info> res = await infoServicer.addInfo(value);
            if (res.errorOccurred)
            {
                return NotFound(res);
            }
            return Ok(res);
        }

        // PUT api/<InfoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
        // PUT api/<InfoController>/5
        [HttpPut("showinfo/{id}")]
        public async Task<IActionResult> showInfo(int id)
        {
            RetunObject<Info> res = await infoServicer.showInfo(id);
            if (res.errorOccurred)
            {
                return NotFound(res);
            }
            return Ok(res);
        }
        // DELETE api/<InfoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
