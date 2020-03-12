using System;

namespace TodosApi.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public string Adjunto { get; set; }
    }
}