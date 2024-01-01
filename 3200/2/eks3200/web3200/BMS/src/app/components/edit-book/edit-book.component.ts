import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  updateBookRequest: Book = {
    id: '',
    title: '',
    author: '',
    price: 0,
    publishedAt:new Date()
  };
  constructor(private router: Router,
    private bookService: BooksService,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) =>{
          const id = params.get('id');

          if(id){
            this.bookService.getBook(id)
            .subscribe({
              next: (response) =>{
                this,this.updateBookRequest = response;
              }
            })
          }
        }
      })
    }

  updateBook(){
    this.bookService.updateBook(this.updateBookRequest.id, this.updateBookRequest)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['books']);
      },
      error:(err) => {
        console.log(err);
      }
    })

  }
  
}
