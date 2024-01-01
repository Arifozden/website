import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { response } from 'express';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  selectedCourse: string = '';
  get uniqueCourses(): string[] {
    // uniqueCourses feature uniquely lists course names of current students
    return Array.from(new Set(this.students.map(student => student.courseName)));
  }

  applyFilter() {
    this.filteredStudents = this.students.filter(student => {
      const nameFilter = student.name.toLowerCase().includes(this.listFilter.toLowerCase());
      const courseFilter = this.selectedCourse ? student.courseName.toLowerCase() === this.selectedCourse.toLowerCase() : true;
      return nameFilter && courseFilter;
    });
  }
  
  
  
  private _listFilter: string='';
  get listFilter(): string{
  return this._listFilter;
}

  set listFilter(value:string){
  this._listFilter=value;
  console.log('In setter:',value);
  this.filteredStudents =this.performFilter(value);
}

  students: Student[] = [];

  filteredStudents:Student[]=this.students;

performFilter(filterBy:string):Student[]{

filterBy=filterBy.toLocaleLowerCase();
return this.students.filter((student:Student)=>
student.name.toLocaleLowerCase().includes(filterBy))
}

  constructor(private studentService: StudentsService, private router: Router){}

  ngOnInit(): void {
      this.studentService.getAllStudents()
      .subscribe({
        next: (students) => {
          this.students = students;
          this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  deleteStudent(id: string) {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if(confirmDelete){
      this.studentService.deleteStudent(id)
    .subscribe({
      next: (response) => {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate([currentUrl]);
        });
      }
    });
    }
      }
}
