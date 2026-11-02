namespace HotelManagement.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public double Rating { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
    }
}