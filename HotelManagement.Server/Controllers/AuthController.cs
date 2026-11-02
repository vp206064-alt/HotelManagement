using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using HotelManagement.Server.Data; // Ensure this matches your namespace for DbContext
using HotelManagement.Models; // Ensure this using statement is present

namespace HotelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly HotelDbContext _context;
        private readonly PasswordHasher<User> _passwordHasher = new();
        // Fully qualified to prevent type mismatch errors
        

        public AuthController(IConfiguration configuration, HotelDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }
   

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] AuthRequestDto request)
        {
            // Check in the real database
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());
            if (existingUser != null)
            {
                return BadRequest(new { message = "User with this email already exists." });
            }

            var newUser = new User { Email = request.Email };
            newUser.PasswordHash = _passwordHasher.HashPassword(newUser, request.Password);

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync(); // Saves permanently to SQL Server

            return Ok(new { message = "User registered successfully." });
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] AuthRequestDto request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());
            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);
            if (verificationResult == PasswordVerificationResult.Failed)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            // Generate JWT Token for secure session management
            var token = GenerateJwtToken(user);

            return Ok(new { token, email = user.Email, message = "Signed in successfully." });
        }

        private string GenerateJwtToken(User user)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var secretKey = jwtSettings["Secret"] ?? "SuperSecretDefaultKeyThatShouldBeLongEnough123!";
            var key = Encoding.ASCII.GetBytes(secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}