using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HotelManagement.Data;
using Property = HotelManagement.Models.Property; // Explicit alias declaration

namespace HotelManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertiesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PropertiesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Property>>> GetProperties([FromQuery] string? type, [FromQuery] string? city)
        {
            var query = _context.Properties.AsQueryable();

            if (!string.IsNullOrEmpty(type))
            {
                query = query.Where(p => p.Type.ToLower() == type.ToLower());
            }

            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(p => p.City.ToLower() == city.ToLower());
            }

            return await query.ToListAsync();
        }
    }
}