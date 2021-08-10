using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RpgOl.Api.Services;
using RpgOl.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
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
        public async Task<UserDto> Validate(string userName, string password)
        {
            return await _userService.ValidateUser(userName, password);
        }

        [HttpPost]
        public async Task<UserDto> CreateUser(UserDto user)
        {
            return await _userService.CreateUser(user.User, user.Email, user.Password, user.Birthday);
        }

    }
}
