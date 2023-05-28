import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
  
  book: Book = new Book();

  constructor(
    private service: BookService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.book.id = this.route.snapshot.paramMap.get('id')
    this.findById();
  }
  
  isbn: FormControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  title: FormControl = new FormControl(null, [Validators.minLength(5), Validators.required]);
  author: FormControl = new FormControl(null, [Validators.minLength(5), Validators.required]);
  publisher: FormControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  pageQty: FormControl = new FormControl(null, [Validators.minLength(2), Validators.required]);

  findById(){
    this.service.findById(this.book.id).subscribe(response => {
      this.book = response;
    });
  }
  
  validateFiels(): boolean {
    return this.isbn.valid
    && this.title.valid
    && this.author.valid
    && this.publisher.valid
    && this.pageQty.valid;
  }

  update(){
    this.service.update(this.book).subscribe(() => {
      this.toastr.success('Book successfully updated!', 'Success', { timeOut: 4000 });
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

}
