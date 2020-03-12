using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TodosApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FileUploadController : ControllerBase
    {
        private readonly IWebHostEnvironment _environment;
        private readonly char _separator = Path.DirectorySeparatorChar;

        public FileUploadController(IWebHostEnvironment environment)
        {
            if (environment == null)
            {
                throw new ArgumentNullException(nameof(environment));
            }
            this._environment = environment;
        }

        public class FileUploadApi
        {
            public IFormFile files { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] FileUploadApi objFile)
        {
            try
            {
                if (objFile.files.Length > 0)
                {
                    if (!Directory.Exists(_environment.ContentRootPath + _separator + "Uploads"))
                    {
                        Directory.CreateDirectory(
                            _environment.ContentRootPath + _separator + "Uploads");
                    }
                    using (FileStream fileStream = System.IO.File.Create(
                        _environment.ContentRootPath +
                        _separator + "Uploads" +
                        _separator + objFile.files.FileName))
                    {
                        await objFile.files.CopyToAsync(fileStream);
                        fileStream.Flush();
                        return Ok(new
                        {
                            resultOk = true,
                            resultValue = _separator + "Uploads" + _separator + objFile.files.FileName
                        });
                    }
                }
                else
                {
                    return StatusCode(StatusCodes.Status404NotFound , new
                    {
                        resultOk = false,
                        resultValue = "Ha especificado un archivo a procesar con longitud 0"
                    });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    resultOk = false,
                    resultValue = ex.Message + ex.StackTrace
                });
            }
        }
    }
}