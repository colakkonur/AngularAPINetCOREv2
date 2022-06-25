using AngularAPINetCORE.Data;
using AngularAPINetCORE.DTO;
using AngularAPINetCORE.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAPINetCORE.Controllers
{
    // localhost:44372/api/products
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly SocialContext _context;

        public ProductsController(SocialContext context)
        {
            _context = context;
        }

        // localhost:44372/api/products with "get" method
        [HttpGet]
        public async Task<IActionResult> GetProduts()
        {
            var products = await _context
                .Products
                .Select(p=> ProductToDTO(p))
                .ToListAsync();
            return Ok(products);
        }

        // localhost:44372/api/products/2 with "get" method
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduts(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(w => w.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(ProductToDTO(product));
        }

        // localhost:44372/api/products with "post" method
        // post requestin bodysinde veriler gönderilir cevap olara response bodysinde eklenen veri geri gönderilir.
        [HttpPost]
        public async Task<IActionResult> CreateProduct(Product entity)
        {
            _context.Products.Add(entity);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(CreateProduct), new { id = entity.ProductId }, ProductToDTO(entity));
        }

        // localhost:44372/api/products/2 with "update/put" method
        // değiştirilmek istenen veri requestin bodysinde gönderilir 
        // cevap olarak istenirse response bodysinde eklenen veri geri gönderilebilir.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product entity)
        {
            if (id != entity.ProductId)
            {
                return BadRequest();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
                return NotFound();

            product.Name = entity.Name;
            product.Price = entity.Price;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                return NotFound();
            }
            return NoContent();
        }

        // localhost:44372/api/products/2 with "delete" method
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
                return NotFound();

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        public static ProductDTO ProductToDTO(Product p)
        {
            return new ProductDTO
            {
                ProductId = p.ProductId,
                Name = p.Name,
                Price = p.Price,
                IsActive = p.IsActive
            };
        }

    }
}
