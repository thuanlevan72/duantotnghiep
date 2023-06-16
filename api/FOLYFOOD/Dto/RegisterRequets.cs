using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FOLYFOOD.Dto
{
    public class RegisterRequets
    {

       
        public string UserName { get; set; }

        public string Email { get; set; }


        public IFormFile Avatar { get; set; }


        public string Password { get; set; }

       
        public int? Status { get; set; }

      
        public int? DecentralizationId { get; set; }
    }
}
