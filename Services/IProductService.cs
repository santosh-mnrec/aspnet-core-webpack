using System.Collections.Generic;
using System.Threading.Tasks;

namespace AspNetCore3Webpack4.Services
{
    public interface IProductService
    {
        Task<Product> GetProductAsync(int id);
        Task<Dictionary<int, string>> GetProductListAsync();
    }
}