import { Component } from '@angular/core';
import { Admin } from 'src/app/models/Admin';
import { Book } from 'src/app/models/Book';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';
import { BookService } from 'src/app/services/book.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[] = [];

  admin: Admin = new Admin();
  customer: Customer = new Customer();

  adminLoggedIn: boolean = false;

  constructor(
    private service: BookService,
    private adminService: AdminService,
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
      this.adminService.findByEmail(localStorage.getItem('admin')).subscribe(response => {
        this.admin = response;
        this.adminLoggedIn = true;
      });
    } else {
      this.customerService.findByEmail(localStorage.getItem('email')).subscribe(response => {
        this.customer = response;
        console.log(this.customer)
      });
      // se não encontrar, tentar achar por bibliotecario

    }
   
  }

}
