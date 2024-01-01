import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseApiUrl: string = "https://localhost:7137";
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseApiUrl + '/api/books')
  }

  addBook(newBook: Book): Observable<Book> {
    newBook.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Book>(this.baseApiUrl + "/api/books", newBook);
  }

  getBook(id: string): Observable<Book>{
    return this.http.get<Book>(this.baseApiUrl + '/api/books/' + id);
  }

  updateBook(id: string, updateBookRequest: Book): Observable<Book>{
    return this.http.put<Book>(this.baseApiUrl + '/api/books/' + id, updateBookRequest);
  }

  deleteBook(id: string): Observable<Book>{
    return this.http.delete<Book>(this.baseApiUrl + '/api/books/' + id);
  }
}
