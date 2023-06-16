using FOLYFOOD.Dto;
using FOLYFOOD.Dto.ProductDto.imageProductDto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers;
using FOLYFOOD.Hellers.imageChecks;
using FOLYFOOD.IService.IProduct.IImageProduct;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace FOLYFOOD.Services.product.ImageProduct
{
    public class ImageProductService : ImageProductInterface
    {
        public readonly Context DBContext;

        public ImageProductService()
        {
            DBContext = new Context();
        }
        public async Task<RetunObject<IQueryable<ProductImage>>> CreateListImage(List<IFormFile> images, int idProduct)
        {
            Product product =  await DBContext.Products.FirstOrDefaultAsync(x=>x.ProductId == idProduct);
            try
            {
                if(product == null)
                {
                    throw new Exception("Sản phẩm không tồn tại");
                }
                if(images.Count == 0)
                {
                    throw new Exception("không tồn tại ảnh để thêm");

                }
                foreach(var image in images)
                {
                    if (!ImageChecker.IsImage(image))
                    {
                        throw new Exception("có lỗi trong quá trình sử lý ảnh");
                    }
                }
            }
            catch (Exception ex)
            {
                return new RetunObject<IQueryable<ProductImage>>()
                {
                    data = null,
                    mess = ex.Message,
                    statusCode = 401
                };
            }
            List<ProductImage> productImageCrate = new List<ProductImage>();
            int index = 0;
                foreach (IFormFile image in images)
                {
                index++;
                ProductImage productImage = new ProductImage();
                string url = await uplloadFile.UploadFile(image);
                productImage.ProductId = idProduct;
                productImage.ImageProduct = url;
                productImage.Title =  "đây là bức ảnh " + " của sản phẩm " + product.NameProduct;
                productImage.Status = 1;
                productImageCrate.Add(productImage);
            }
            DBContext.ProductImages.AddRangeAsync(productImageCrate);
            DBContext.SaveChanges();

            return new RetunObject<IQueryable<ProductImage>>()
            {
                data = productImageCrate.AsQueryable(),
                mess = "thêm danh sách ảnh thành công",
                statusCode = 201
            };

        }

        public Task<RetunObject<IQueryable<ProductImage>>> DeleteListImage(List<ImageProductDto> product)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<ProductImage>> getListImageByIdProduct(int productId)
        {
            throw new NotImplementedException();
        }

        public Task<RetunObject<IQueryable<ProductImage>>> UpdateListImage(List<ImageProductDto> product)
        {
            throw new NotImplementedException();
        }
    
}
}
