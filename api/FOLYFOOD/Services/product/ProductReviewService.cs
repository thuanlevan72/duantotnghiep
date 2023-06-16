﻿using FOLYFOOD.Dto;
using FOLYFOOD.Dto.ProductDto;
using FOLYFOOD.Entitys;
using FOLYFOOD.Hellers.imageChecks;
using FOLYFOOD.IService.IProduct;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace FOLYFOOD.Services.product
{
    public class ProductReviewService : ProductReviewInterface
    {
        public readonly Context DBContext;

        public ProductReviewService()
        {
            DBContext = new Context();
        }

        public async Task<RetunObject<ProductReview>> createReview(ProductReviewDto value)
        {
           User userReview = await DBContext.Users.SingleOrDefaultAsync(x=>x.UserId == value.UserId);
           Product product = await DBContext.Products.SingleOrDefaultAsync(x => x.ProductId == value.ProductId);
            try
            {
                if (value.ContentRated == "" || value.ProductId == null || value.UserId == null || value.PointEvaluation == null)
                {
                    throw new Exception("Thông tin gửi lên không đầy đủ");
                }
                if (product == null) {
                    throw new Exception("sản phẩm đánh giá không tồn tại");
                }
               if(userReview == null)
                {
                    throw new Exception("người dùng đánh giá không tồn tại");
                }
             
            }
            catch (Exception ex)
            {
                return new RetunObject<ProductReview>()
                {
                    data = null,
                    mess = ex.Message,
                    statusCode = 401
                };
            }
            ProductReview productReviewCrate = new ProductReview()
            {
                ProductId = value.ProductId.Value,
                UserId = value.UserId.Value,
                ContentRated = value.ContentRated,
                PointEvaluation = value.PointEvaluation,
                Status = value.Status,
                ContentSeen = "",
            };
            await DBContext.ProductReviews.AddAsync(productReviewCrate);
            await DBContext.SaveChangesAsync();
             return new RetunObject<ProductReview>()
            {
                data = productReviewCrate,
                mess = "đã thêm đánh giá thành công",
                statusCode = 200
            };

        }

        public async Task<RetunObject<ProductReview>> deleteReview(int ProductReviewId)
        {

            ProductReview productReview = await DBContext.ProductReviews.SingleOrDefaultAsync(x => x.ProductReviewId == ProductReviewId);
            try
            {
                if (productReview == null)
                {
                    throw new Exception("Thông tin đánh giá không tồn tại");
                }

            }
            catch (Exception ex)
            {
                return new RetunObject<ProductReview>()
                {
                    data = null,
                    mess = ex.Message,
                    statusCode = 401
                };
            }
            DBContext.Remove(productReview);
            DBContext.SaveChanges();

            return new RetunObject<ProductReview>()
            {
                data = productReview,
                mess = "đã xóa phản hồi đánh giá thành công",
                statusCode = 200
            };
        }

        public async Task<IQueryable<ProductReview>> getProductReview()
        {
            IQueryable<ProductReview> productReviews = DBContext.ProductReviews.AsNoTracking().AsQueryable();
            return productReviews;
        }

        public async Task<IQueryable<ProductReview>> getReviewForProduct(int productId)
        {
            IQueryable<ProductReview> productReviews = DBContext.ProductReviews.AsNoTracking().Where(x => x.ProductId == productId && x.Status == 1).AsQueryable();
            return productReviews;

        }

        public async Task<RetunObject<ProductReview>> replyReview(int ProductReviewId, string mess)
        {
            ProductReview productReview = await DBContext.ProductReviews.SingleOrDefaultAsync(x=>x.ProductReviewId == ProductReviewId);
            try
            {
                if (productReview == null)
                {
                    throw new Exception("Thông tin đánh giá không tồn tại");
                }
                if(mess == "")
                {
                    throw new Exception("Nội dung đánh giá không tồn tại");
                }

            }
            catch (Exception ex)
            {
                return new RetunObject<ProductReview>()
                {
                    data = null,
                    mess = ex.Message,
                    statusCode = 401
                };
            }
            productReview.ContentSeen = mess;
            DBContext.Update(productReview);
            DBContext.SaveChanges();

            return new RetunObject<ProductReview>()
            {
                data = productReview,
                mess = "đã đánh phản hồi đánh giá thành công",
                statusCode = 200
            };
        }

        public Task<RetunObject<ProductReview>> updateReview(ProductReviewDto value)
        {
            throw new NotImplementedException();
        }
    }
}
