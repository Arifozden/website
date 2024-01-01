using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniAPI.Data;
using UniAPI.Models;

namespace UniAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class StudentsController : Controller
    {
        private readonly UniDbContext _uniDbContext;

        public StudentsController(UniDbContext uniDbContext)
        {
            _uniDbContext = uniDbContext;
        }

        [HttpGet]
        public async Task <IActionResult> GelAllStudents()
        {
            var students = await _uniDbContext.Students.ToListAsync();
            return Ok(students);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] Student student)
        {
            student.Id = Guid.NewGuid();

            await _uniDbContext.Students.AddAsync(student);
            await _uniDbContext.SaveChangesAsync();
            return Ok(student);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetStudent(Guid id)
        {
            var student = await _uniDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);

            if(student == null) 
                return NotFound();

            return Ok(student);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> EditStudent([FromRoute] Guid id, Student editStudentRequest)
        {
            var student = await _uniDbContext.Students.FindAsync(id);

            if(student == null) return NotFound();

            student.Name = editStudentRequest.Name;
            student.Surname = editStudentRequest.Surname;
            student.studNumber = editStudentRequest.studNumber;
            student.email = editStudentRequest.email;
            student.mobil = editStudentRequest.mobil;
            student.courseName = editStudentRequest.courseName;
            student.beginYear = editStudentRequest.beginYear;
           
            await _uniDbContext.SaveChangesAsync();

            return Ok(student);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteStudent(Guid id)
        {
            var student = await _uniDbContext.Students.FindAsync(id);

            if(student == null) return NotFound();

            _uniDbContext.Students.Remove(student);
            await _uniDbContext.SaveChangesAsync();
            return Ok(student);
        }
    }
}