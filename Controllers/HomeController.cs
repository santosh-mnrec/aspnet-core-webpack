using AspNetCore3Webpack4.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AspNetCore3Webpack4.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductService productService;
        public HomeController(IProductService productService) => this.productService = productService;

        public Dictionary<int, string> ProductList { get; set; } = new Dictionary<int, string>();
       
        public async  Task<IActionResult> Index()
        {
            ProductList = await productService.GetProductListAsync();
            return View(ProductList);
        }
        [HttpGet("{id}")]
        public async Task<JsonResult> Index(int id)
        {
            ProductList = await productService.GetProductListAsync();
            return new JsonResult(ProductList);
        }
    }
}