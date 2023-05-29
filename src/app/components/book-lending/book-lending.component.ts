import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Customer } from 'src/app/models/Customer';
import { Loan } from 'src/app/models/Loan';
import { BookService } from 'src/app/services/book.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-book-lending',
  templateUrl: './book-lending.component.html',
  styleUrls: ['./book-lending.component.css']
})
export class BookLendingComponent {

  book: Book = new Book();
  books: Book[];
  customer: Customer = new Customer();
  bookId: string;

  loan: Loan = {
    book: 0,
    customer: 0,
    loanDays: 0,
    loanApproved: false,
    status: 0,
  }

  constructor(
    private bookService: BookService,
    private customerService: CustomerService,
    private loanService: LoanService
  ) { }

  ngOnInit() {
    this.findAllBooks();
    this.findCustomer();
  }

  findAllBooks() {
    this.bookService.findAll().subscribe(response => {
      this.books = response;
    })
  }

  findCustomer() {
    this.customerService.findByEmail(localStorage.getItem('email')).subscribe(response => {
      this.customer = response;
    })
  }

  create() {
    this.loan.book = parseInt(this.bookId)
    this.loan.customer = this.customer.id
    
  }

  validateFields() {
    return true;
  }

}
