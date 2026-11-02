using HotelManagement.Models; // Ensure this matches where your Room and User classes are located
using Microsoft.EntityFrameworkCore;
using HotelManagement.Server.Models;

namespace HotelManagement.Server.Data
{
    public class HotelDbContext : DbContext
    {
        public HotelDbContext(DbContextOptions<HotelDbContext> options) : base(options) { }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<User> Users { get; set; }
    }
}