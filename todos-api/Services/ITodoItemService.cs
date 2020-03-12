using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodosApi.Models;

namespace TodosApi.Services
{
    public interface ITodoItemService
    {
          Task<IEnumerable<TodoItem>> GetTodoItems();
          Task<IEnumerable<TodoItem>> GetFilteredTodoItems(bool todosCompleted, string filter = null, string value = null);
          Task<int> PostTodoItem(TodoItem todoItem);
          Task<int> IsDone(int id);
    }
}