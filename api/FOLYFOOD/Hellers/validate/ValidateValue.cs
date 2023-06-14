﻿using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace FOLYFOOD.Hellers.validate
{
    public class ValidateValue
    {
        public static bool IsValidEmail(string email)
        {
            var emailAttribute = new EmailAddressAttribute();
            return emailAttribute.IsValid(email);
        }
        public static bool IsValidPhoneNumber(string phoneNumber)
        {
            string pattern = @"^(84|0[35789])[0-9]{8}$";
            return Regex.IsMatch(phoneNumber, pattern);
        }
    }
}
