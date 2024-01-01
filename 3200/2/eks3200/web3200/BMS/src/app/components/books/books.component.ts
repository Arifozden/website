import { Component, OnInit} from '@angular/core';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router'
import { BooksService } from '../../services/books.service';
import { response } from 'express';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{


private _listFilter: string='';
get listFilter(): string{
return this._listFilter;
}

set listFilter(value:string){
  this._listFilter=value;
  console.log('In setter:',value);
  this.filteredBooks =this.performFilter(value);
}

books : Book[]=[];
filteredBooks:Book[]=this.books;

performFilter(filterBy:string):Book[]{

filterBy=filterBy.toLocaleLowerCase();
return this.books.filter((book:Book)=>
book.title.toLocaleLowerCase().includes(filterBy))
}

constructor(private bookService: BooksService, private router: Router){}
ngOnInit(): void {
  this.bookService.getAllBooks()
  .subscribe({
    next: (books) => {
      this.books = books;
      this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
    },
    error: (response) =>{
      console.log(response);
    }
  });
}

deleteBook( id: string){
  const confirmDelete = window.confirm("Are you sure to delete this book?");
  if(confirmDelete){
    this.bookService.deleteBook(id)
    .subscribe({
      next: (response) => {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>{
          this.router.navigate([currentUrl]);
        });
      }
    });
  } 
}
}
