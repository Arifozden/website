import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  newBook: Book = {
    id: '',
    title: '',
    author: '',
    price: 0,
   publishedAt:new Date()
  };

constructor(private bookService: BooksService, private router: Router){}
addBook(){
  this.bookService.addBook(this.newBook)
  .subscribe({
    next:(book) =>{
      this.router.navigate(['books']);
    },
    error: (response) =>{
      console.log(response);
    }
  });
 }
 cancel() {
  this.router.navigate(['/']); // to home page
}
}
