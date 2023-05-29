import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Customer } from 'src/app/models/Customer';
import { BookService } from 'src/app/services/book.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[] = [];

  customer: Customer = new Customer();

  pessoas: Object[];

  constructor(
    private service: BookService,
    private customerService: CustomerService
    ){}

  ngOnInit(): void{
    this.findAll();
    this.findCurrentUser();
  }

  findAll(): void{
    this.service.findAll().subscribe(response => {
      this.books = response;
    })
  }

  findCurrentUser(){
    if(localStorage.getItem('admin') != null){
      // pegar admin

    } else {
      // tentar achar por customer
      this.customerService.findByEmail(localStorage.getItem('email')).subscribe(response => {
        this.customer = response;
        console.log(this.customer)
      });
      // se não encontrar, tentar achar por bibliotecario

    }
   
  }

}
