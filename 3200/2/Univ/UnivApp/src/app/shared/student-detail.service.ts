import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StudentDetail } from './student-detail.model';
import { NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  url:string = environment.apiBaseUrl + '/Student'
  list:StudentDetail [] = [];
  formData : StudentDetail = new StudentDetail()
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as StudentDetail[]
      },
      error: err => { console.log(err) }
    })
  }

  postStudentDetail(){
    return this.http.post(this.url,this.formData)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData= new StudentDetail()
  }
}
