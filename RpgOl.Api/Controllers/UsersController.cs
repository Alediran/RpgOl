using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RpgOl.Api.Services;
using RpgOl.Domain;
using System.Threading.Tasks;

namespace RpgOl.Api.Controllers
{
    [ApiController]
    [Route("/api/user")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly IUserService _userService;
        public UsersController(ILogger<UsersController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet]
        public async Task<User> Validate(string userName, string password)
        {
            return await _userService.ValidateUser(userName, password);
        }

        [HttpPost]
        public async Task<User> CreateUser(User user)
        {
            return await _userService.CreateUser(user.Name, user.Email, user.Password, user.Birthday);
        }

        [HttpGet]
        [Route("exists")]
        public async Task<bool> UserExists(string userName)
        {
            return await _userService.GetByUsername(userName) != null;
        }

    }
}
