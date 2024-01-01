import { Component } from '@angular/core';
import { StudentDetailService } from '../../shared/student-detail.service';
import { NgForm } from "@angular/forms"
import { StudentDetail } from '../../shared/student-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  constructor(public service: StudentDetailService,){
  }

  onSubmit(form: NgForm){
    this.service.postStudentDetail()
    .subscribe({
      next: res => {
        this.service.list = res as StudentDetail[]
        this.service.resetForm(form)
      },
      error: err => {console.log(err)}
    })
  }
}
