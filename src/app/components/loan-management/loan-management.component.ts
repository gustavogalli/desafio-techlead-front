import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Customer } from 'src/app/models/Customer';
import { Loan } from 'src/app/models/Loan';
import { BookService } from 'src/app/services/book.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-management',
  templateUrl: './loan-management.component.html',
  styleUrls: ['./loan-management.component.css']
})
export class LoanManagementComponent {

  books: Book[];
  customers: Customer[];
  loans: Loan[];

  constructor(
    private service: LoanService,
    private bookService: BookService,
    private customerService: CustomerService
  ){}

  ngOnInit(){
    this.findAllLoans();
  }

  findAllLoans(){
    this.service.findAll().subscribe(response => {
      this.loans = response;
    })
  }

}
