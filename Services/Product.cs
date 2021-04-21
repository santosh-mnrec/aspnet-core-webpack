using System.ComponentModel.DataAnnotations;

namespace AspNetCore3Webpack4.Services
{
    public class Product
    {
        public Category Category { get;  set; }
        [Key]
        public int ProductId { get;  set; }
        public string ProductName { get;  set; }
        public string Supplier { get;  set; }
    }
}