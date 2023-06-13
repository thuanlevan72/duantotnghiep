using FOLYFOOD.Dto;
using FOLYFOOD.Dto.ProductDto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers.Pagination;

namespace FOLYFOOD.IService.IProduct
{
    public interface ProductInterface
    {
        public Task<RetunObject<Product>> CreateProduct(ProductDto product);

        public Task<RetunObject<Product>> updateProduct(int productId,  ProductDto product);

        public Task<IQueryable<Product>> getProducts();
        public Task<RetunObject<Product>> updateStatus(int id);

        public Task<RetunObject<Product>> deleteProduct(int productId);

        public Task<RetunObject<Product>> getDetailproduct(int productId);

    }
}
