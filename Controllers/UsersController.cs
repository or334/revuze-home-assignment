using Microsoft.AspNetCore.Mvc;
using revuze_exam.Classes;
using revuze_exam.Enum;
using revuze_exam.Logics;
using System;
using System.Threading.Tasks;

namespace revuze_exam.Controllers
{
    [ApiController]
    [Route("api/v1/users")]
    public class UsersController : ControllerBase
    {
        private readonly IUserLogics _logics;
        public UsersController(IUserLogics logics)
        {
            _logics = logics ?? throw new ArgumentNullException(nameof(logics)); ;
        }
        [HttpGet]
        public async Task<ActionResult<UsersList>> GetUsers([FromQuery] EQuarter quarter)
        {
            if ((int)quarter <= 0 || (int)quarter > 4)
                return BadRequest("Quarter must be between 1 to 4.");
            var users = await _logics.GetUsersListByQuarterAsync(quarter).ConfigureAwait(false);
            return Ok(users);
        }
    }
}
