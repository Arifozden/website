import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{
  editStudentRequest: Student = {
    id: '',
    name:'',
    surname:'',
    studNumber:'',
    email:'',
    mobil:'',
    courseName:'',
    beginYear:''
  };

  constructor(private router: Router, private studentService: StudentsService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');

          if(id){
            this.studentService.getStudent(id)
            .subscribe({
              next: (response) => {
                this.editStudentRequest = response;
              }
            });
          }
        }
      });
  }

  editStudent(){
    this.studentService.editStudent(this.editStudentRequest.id, this.editStudentRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['students']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
