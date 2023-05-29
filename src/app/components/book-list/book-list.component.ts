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

  customers: Customer[];

  customer: Customer = new Customer;

  constructor(
    private service: BookService,
    private customerService: CustomerService
    ){}

  ngOnInit(): void{
    this.findAll();
    this.findAllCustomers();
  }

  findAll(): void{
    this.service.findAll().subscribe(response => {
      this.books = response;
    })
  }

  findAllCustomers(){
    this.customerService.findAll().subscribe(response => {
      this.customers = response;
      console.log(this.customers)
    })
  }

}
