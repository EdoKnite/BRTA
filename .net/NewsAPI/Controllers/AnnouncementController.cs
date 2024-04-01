using Microsoft.AspNetCore.Mvc;
using NewsAPI.Model;
using NewsAPI.Services;

namespace NewsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnnouncementController : ControllerBase
    {


        IAnnouncementCollectionService _announcementCollectionService;
        public AnnouncementController(IAnnouncementCollectionService announcementCollectionService)
        {
            _announcementCollectionService = announcementCollectionService ?? throw new ArgumentNullException(nameof(AnnouncementCollectionService));
        }


        /// <summary>
        /// This is my get method
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAnnouncements()
        {
            List<Announcement> announcements = await _announcementCollectionService.GetAll();
            
            return Ok(announcements);
        }


        /// <summary>
        /// This is my put method
        /// </summary>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Announcement announcement)
        {
            if (announcement == null)
            {
                return BadRequest("Announcement cannot be null");
            }

            bool result = await _announcementCollectionService.Update(announcement.Id, announcement);

            if (!result)
                return NotFound("404");

            else
                return Ok(announcement);
        }

        /// <summary>
        /// This is my post method
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateAnnouncement([FromBody] Announcement announcement)
        {
            bool result = await _announcementCollectionService.Create(announcement);
            if (!result)
            {
                return BadRequest("Announcement cannot be null");
            }

            return Ok(announcement);
        }


        /// <summary>
        /// This is my delete method
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> delete(Guid id)
        {
            var result = await _announcementCollectionService.Delete(id);

            if (!result)
                return NotFound("Announcement not found");

            return Ok("Announcement deleted");
        }
    }
}
