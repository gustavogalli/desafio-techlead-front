import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  customer: Customer = new Customer();

  passwordCheck: string = ''

  constructor(
    private service: CustomerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  name: FormControl = new FormControl(null, [Validators.minLength(3), Validators.required]);
  cpf: FormControl = new FormControl(null, [Validators.required]);
  email: FormControl = new FormControl(null, [Validators.email, Validators.required]);
  password: FormControl = new FormControl(null, [Validators.minLength(5), Validators.required]);

  ngOnInit() { 
    window.scroll(0, 0)
  }

  validateFiels(): boolean {
    return this.name.valid && this.cpf.valid && this.email.valid && this.password.valid;
  }

  signup(){
    this.service.create(this.customer).subscribe(() => {
      this.toastr.success('User created!', 'Success', { timeOut: 4000 });
      this.customer = new Customer();
      this.router.navigate(['/login'])
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