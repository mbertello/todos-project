using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodosApi.Models;
using TodosApi.Services;

namespace TodosApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoItemsController : ControllerBase
    {
        private readonly ITodoItemService _todoItemService;

        public TodoItemsController(ITodoItemService _todoItemService)
        {
            this._todoItemService = _todoItemService;
        }

        [HttpGet]
        public async Task<IEnumerable<TodoItem>> GetTodoItems()
        {
            return await _todoItemService.GetTodoItems();
        }

        [HttpGet("{todosCompleted}/{filter?}/{value?}")]
        public async Task<IEnumerable<TodoItem>> GetFilteredTodoItem(bool todosCompleted, string filter = null, string value = null)
        {
            return await _todoItemService.GetFilteredTodoItems(todosCompleted, filter, value);
        }

        [HttpPost]
        public async Task<IActionResult> PostTodoItem([FromForm] TodoItem todoItem)
        {
            try
            {
                int isSaved = await _todoItemService.PostTodoItem(todoItem);
                if (isSaved > 0)
                {
                    return CreatedAtAction(nameof(PostTodoItem), new { id = todoItem.Id }, todoItem);
                }
                else
                {
                    return NoContent();
                }
            }
            catch (Exception)
            {
                return NoContent();
            }
        }

        [HttpPut]
        public async Task<IActionResult> IsDone([FromForm]int id)
        {
            try
            {
                int isUpdated = await _todoItemService.IsDone(id);
                if (isUpdated > 0)
                {
                    return Ok();
                }
                else
                {
                    return NoContent();
                }
            }
            catch (Exception)
            {
                return NoContent();
            }
        }
    }
}