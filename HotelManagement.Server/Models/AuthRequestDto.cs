using System.ComponentModel.DataAnnotations;

namespace HotelManagement.Models
{
    public class AuthRequestDto
    {
        [Required, EmailAddress]
        public required string Email { get; set; } = string.Empty;

        [Required]
        public required string Password { get; set; } = string.Empty;
    }
}