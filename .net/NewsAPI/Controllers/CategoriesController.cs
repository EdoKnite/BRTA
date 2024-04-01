using Microsoft.AspNetCore.Mvc;
using NewsAPI.Model;

namespace NewsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : Controller
    {
       
        
        /// <summary>
        /// This returns all categories
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult getAll()
        {
            List<Category> categories = new List<Category> { new Category(1, "Laboratory"),
                                                             new Category(2, "Course"),
                                                             new Category(3, "General")};

                return Ok(categories);

            
        }


        /// <summary>
        /// This returns just one category
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult getOne(long id)
        {
            List<Category> categories = new List<Category> { new Category(1, "Laboratory"),
                                                             new Category(2, "Course"),
                                                             new Category(3, "General")};
            Category? category = categories.FirstOrDefault(c => c.id == id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }
    }
}
