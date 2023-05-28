import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  existingCustomer: Customer = new Customer();

  foundCustomer: Customer = new Customer();

  customer: Customer = new Customer();

  constructor(
    private service: CustomerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  checkUserByCpf() {
    this.service.findByCpf(this.existingCustomer.cpf).subscribe(response => {

      if (this.existingCustomer.name == response.name && this.existingCustomer.email == response.email) {
        response.password = this.existingCustomer.password;
        this.changePassword(response);
      }
    })
  }

  changePassword(foundCustomer: Customer) {
    this.service.update(foundCustomer).subscribe(response => {
      this.toastr.success('Password successfully updated!', 'Success', { timeOut: 5000 });
      this.customer = response;
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
