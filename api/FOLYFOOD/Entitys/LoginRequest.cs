namespace FOLYFOOD.Entitys
{
    public class LoginRequest
    {
        public LoginRequest()
        {
            this.UserName = String.Empty;
            this.Password = String.Empty;
            this.Role = String.Empty;
        }

        public string UserName { get; set; }
        public string email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }

}
