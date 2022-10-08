using Microsoft.AspNetCore.Mvc;
using JLearning.api;
using MySqlConnector;

namespace JLearning.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        [Route("{userId}")]
        [HttpGet]
        public IActionResult getAllCourse(string userId)
        {
            try
            {
                var sqlConnection = new MySqlConnection(consts.dbConnection);

                string getAllCoursesCommand = "select * from "
            }
        }
    }
}
