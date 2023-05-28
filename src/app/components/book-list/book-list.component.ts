import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[];

  constructor(private service: BookService){}

  ngOnInit(): void{
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe(response => {
      this.books = response;
    })
  }
}
