using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace FOLYFOOD.Entitys
{
    [Table("account")]
    public class Account
    {
        [Key]
        [Column("account_id")]
        public int AccountId { get; set; }

        [Column("user_name")]
        public string UserName { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("avatar")]
        public string Avartar { get; set; }

        [Column("password")]
        public string Password { get; set; }

        [Column("status")]
        public int Status { get; set; }

        [Column("decentralization_id")]
        public int DecentralizationId { get; set; }

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }

        [Column("update_at")]
        public DateTime UpdateAt { get; set; }

        public Decentralization Decentralization { get; set; }

        public User User { get; set; }

        public Staff Staff { get; set; }
    }
}
