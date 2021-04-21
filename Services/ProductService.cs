using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AspNetCore3Webpack4.Services
{
    public class ProductService : IProductService
    {
        private readonly MyDbContext context;
        public ProductService(MyDbContext context)
        {
            var customer = new Product
            {
                Category = new Category(),
                ProductName = "x",
                Supplier = "x"

            };

            context.Products.Add(customer);
            context.SaveChanges();

            this.context = context;

        }

        public async Task<Dictionary<int, string>> GetProductListAsync() => await context?.Products?.ToDictionaryAsync(k => k.ProductId, v => v.ProductName);
        public async Task<Product> GetProductAsync(int id) => await context.Products.Include(p => p.Category).Include(p => p.Supplier).FirstOrDefaultAsync(p => p.ProductId == id);
    }
}