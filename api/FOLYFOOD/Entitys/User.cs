using System.ComponentModel.DataAnnotations.Schema;

namespace FOLYFOOD.Entitys
{

    [Table("user")]
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public int AccountId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Account Account { get; set; }

        public ICollection<ProductReview> ProductReviews { get; set; }
    }
}
