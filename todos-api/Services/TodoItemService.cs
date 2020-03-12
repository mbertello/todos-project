using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodosApi.Models;
using System.Linq;

namespace TodosApi.Services
{
    public class TodoItemService : ITodoItemService
    {
        private readonly TodoContext _context;
        public TodoItemService(TodoContext _context)
        {
            this._context = _context;
        }

        public async Task<IEnumerable<TodoItem>> GetTodoItems()
        {
            return await _context.TodoItems.Where(i => i.Estado == false).ToListAsync();
        }

        public async Task<IEnumerable<TodoItem>> GetFilteredTodoItems(bool todosCompleted, string filter = null, string value = null)
        {
            var todoItemList = new List<TodoItem>();
            switch (filter)
            {
                case null:
                    todoItemList = await _context.TodoItems.Where(
                        i => i.Estado == todosCompleted).ToListAsync();
                    break;
                case "Id":
                    if (value == null)
                    {
                        todoItemList = await _context.TodoItems.Where(
                           i => i.Estado == todosCompleted).ToListAsync();
                    }
                    else
                    {
                        var todoItem = await _context.TodoItems
                            .FirstOrDefaultAsync(i => i.Id == int.Parse(value) &&
                                                 i.Estado == todosCompleted);
                        if (todoItem != null)
                        {
                            todoItemList.Add(todoItem);
                        }
                    }
                    break;
                case "Descri":
                    if (value == null)
                    {
                        todoItemList = await _context.TodoItems.Where(
                           i => i.Estado == todosCompleted).ToListAsync();
                    }
                    else
                    {
                        todoItemList = await _context.TodoItems.Where(
                            i => i.Descripcion.Contains(value) &&
                            i.Estado == todosCompleted).ToListAsync();
                    }
                    break;
                default:
                    break;
            }
            return todoItemList;
        }

        public async Task<int> PostTodoItem(TodoItem todoItem)
        {
            _context.TodoItems.Add(todoItem);
            try
            {
                return await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TodoItemExists(todoItem.Id))
                {
                    return 0;
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<int> IsDone(int id)
        {
            TodoItem todoItem = await _context.TodoItems.FirstOrDefaultAsync(i => i.Id == id);
            if (todoItem != null)
            {
                todoItem.Estado = true;
                _context.Entry(todoItem).State = EntityState.Modified;
                try
                {
                    return await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TodoItemExists(id))
                    {
                        return 0;
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            else
            {
                return 0;
            }
        }

        private bool TodoItemExists(int id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}