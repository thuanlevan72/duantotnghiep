using System.ComponentModel.DataAnnotations.Schema;

namespace FOLYFOOD.Entitys
{
    [Table("order")]
    public class Order
    {
        public int OrderId { get; set; }

        public int UserId { get; set; }
        public int Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        // Mối quan hệ: Một Order có nhiều OrderDetail
        public ICollection<OrderDetail> OrderDetails { get; set; }

        // Mối quan hệ: Một Order thuộc về một OrderStatus
        public OrderStatus OrderStatus { get; set; }

        public User User { get; set; }
    }
}
