import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseApiUrl: string = "http://localhost:5271";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/api/students');
  }

  addStudent(newStudent: Student): Observable<Student> {
    newStudent.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Student>(this.baseApiUrl + "/api/students", newStudent);
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.baseApiUrl + '/api/students/' + id);
  }

  editStudent(id: string, editStudentRequest: Student): Observable<Student> {
    return this.http.put<Student>(this.baseApiUrl + '/api/students/' + id, editStudentRequest);
  }

  deleteStudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.baseApiUrl + '/api/students/' + id);
  }
}
