import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { Customer } from 'src/app/models/Customer';
import { BookService } from 'src/app/services/book.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  
  book: Book = new Book();

  customer: Customer;

  constructor(
    private service: BookService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.findCurrentCustomer();
  }
  
  isbn: FormControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  title: FormControl = new FormControl(null, [Validators.minLength(5), Validators.required]);
  author: FormControl = new FormControl(null, [Validators.minLength(5), Validators.required]);
  publisher: FormControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  pageQty: FormControl = new FormControl(null, [Validators.minLength(2), Validators.required]);

  validateFiels(): boolean {
    return this.isbn.valid
    && this.title.valid
    && this.author.valid
    && this.publisher.valid
    && this.pageQty.valid;
  }

  create(){
    this.book.uploader = this.customer.id;
    this.service.create(this.book).subscribe(() => {
      this.toastr.success('Book successfully added!', 'Success', { timeOut: 4000 });
      this.book = new Book();
      this.router.navigate(['/book-list'])
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

  findCurrentCustomer(){
    this.customerService.findByEmail(localStorage.getItem('email')).subscribe(response => {
      this.customer = response;
    })
  }

}
