import { Component,OnInit } from '@angular/core';
import { StudentDetailService } from '../shared/student-detail.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{

  constructor(public service: StudentDetailService){
    }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
