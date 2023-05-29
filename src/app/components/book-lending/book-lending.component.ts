import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/Book';
import { Customer } from 'src/app/models/Customer';
import { Loan } from 'src/app/models/Loan';
import { BookService } from 'src/app/services/book.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LoanService } from 'src/app/services/loan.service';

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
    loanDays: null,
    loanApproved: false,
    status: 8,
    startDate: '',
    endDate: ''
  }

  constructor(
    private bookService: BookService,
    private customerService: CustomerService,
    private loanService: LoanService,
    private toastr: ToastrService,
    private router: Router
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
    this.loanService.create(this.loan).subscribe(response => {
      this.toastr.success('Loan created!', 'Success', { timeOut: 4000 });
      this.router.navigate(['/home'])
    }, exception => {
      if(exception.error.errors){
        exception.error.errors.forEach(element => {
          this.toastr.error(element.message);
        });
      } else {
        this.toastr.error(exception.error.message);
      }
    })
  }

  validateFields() {
    return true;
  }

}
