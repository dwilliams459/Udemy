using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Data;
using DatingApp.API.DTOs;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using AutoMapper;
using System.Collections.Generic;
using System.Security.Claims;
using System;
using DatingApp.API.Helpers;

namespace DatingApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _datingRepo;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepository datingRepo, IMapper mapper)
        {
            _mapper = mapper;
            _datingRepo = datingRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var userFromRepo = await _datingRepo.GetUser(currentUserId);
            
            userParams.UserId = currentUserId;

            if (string.IsNullOrEmpty(userParams.Gender))
            {
                userParams.Gender = (userFromRepo.Gender == "male") ? "female" :"male";
            }
              
            var users = await _datingRepo.GetUsers(userParams);
            
            var usersToReturn = _mapper.Map<IEnumerable<UserForDetailedDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.PageSize);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _datingRepo.GetUser(id);
            UserForDetailedDto userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();                
            }

            var userFromRepo = await _datingRepo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if(await _datingRepo.SaveAll())
            {
                return NoContent();
            }

            throw new Exception($"Updating user {id} failed on save");
        }

        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId) 
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();                
            }

            var like = await _datingRepo.GetLike(id, recipientId);

            if (like != null)
            {
                return BadRequest("You already like this user");
            }

            if (await _datingRepo.GetUser(recipientId) == null)
            {
                return NotFound("User not found");
            }

            like = new Like {
                LikerId = id,
                LikeeId = recipientId
            };

            _datingRepo.Add<Like>(like);
            
            if(await _datingRepo.SaveAll())
            {
                return Ok();
            }

            return BadRequest("Failed to like user");
        }

        [HttpPost("{id}/unlike/{recipientId}")]
        public async Task<IActionResult> Unlike(int id, int recipientId) 
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();                
            }

            var like = await _datingRepo.GetLike(id, recipientId);

            if (like == null)
            {
                return Ok("User is not currently liked");
            }

            if (await _datingRepo.GetUser(recipientId) == null)
            {
                return NotFound();
            }

            _datingRepo.Delete<Like>(like);
            
            if(await _datingRepo.SaveAll())
            {
                return Ok();
            }

            return BadRequest("Failed to unlike user");
        }
    }
}