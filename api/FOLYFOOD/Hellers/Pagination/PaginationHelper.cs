namespace FOLYFOOD.Hellers.Pagination
{
    public class PaginationHelper
    {
        public static PagedResult<T> GetPagedData<T>(List<T> data, int page, int pageSize)
        {
            int totalItems = data.Count;
            int totalPages = (int)Math.Ceiling((decimal)totalItems / pageSize);
            List<T> pagedData = data
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new PagedResult<T>
            {
                TotalItems = totalItems,
                TotalPages = totalPages,
                Page = page,
                PageSize = pageSize,
                Data = pagedData
            };
        }
    }
}
