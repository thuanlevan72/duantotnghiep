using FOLYFOOD.Dto.ProductDto;
using FOLYFOOD.Dto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Dto.ProductDto.imageProductDto;

namespace FOLYFOOD.IService.IProduct.IImageProduct
{
    public interface ImageProductInterface
    {
        public Task<RetunObject<IQueryable<ProductImage>>> CreateListImage(List<IFormFile> images, int idProduct);
        public Task<RetunObject<IQueryable<ProductImage>>> UpdateListImage(List<ImageProductDto> product);
        public Task<RetunObject<IQueryable<ProductImage>>> DeleteListImage(List<ImageProductDto> product);
        public Task<IQueryable<ProductImage>> getListImageByIdProduct(int productId);
    }
}
