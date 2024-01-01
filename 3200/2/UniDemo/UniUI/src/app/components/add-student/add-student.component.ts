import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="mb-3">
        <label for="mobil" class="form-label">Student Mobil</label>
        <span class="text-danger" for="mobil">*</span>
        <input type="text" class="form-control" id="mobil" name="mobil" [(ngModel)]="newStudent.mobil" required (keypress)="validateMobileNumber($event)">
        <div *ngIf="form.controls['mobil'].invalid && (form.controls['mobil'].dirty || form.controls['mobil'].touched)" class="text-danger">
          Please enter a valid mobile number.
        </div>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Save</button>
    </form>
  `,
  styles: []
})

export class AddStudentComponent {
  form: FormGroup;
  newStudent: Student = {
    id: '',
    name:'',
    surname:'',
    studNumber:'',
    email:'',
    mobil:'',
    courseName:'IT',
    beginYear:'2024'
  };
  

  constructor(private studentService: StudentsService, private router: Router, private fb: FormBuilder){
    this.form = this.fb.group({
      mobil: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.form.value);
  }

  addStudent(){
    this.studentService.addStudent(this.newStudent)
    .subscribe({
      next: (student) => {
        this.router.navigate(['students']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  cancel(){
    this.router.navigate(['students']); //to the student list
  }
  validateMobileNumber(event: any) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.trim();
    
    // Allow only numeric characters and limit to 8 digits
    const isValid = /^\d{0,7}$/.test(inputValue);

    if (!isValid) {
      event.preventDefault();
    }
  }
}
