import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Loan } from 'src/app/models/Loan';
import { CustomerService } from 'src/app/services/customer.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-delay',
  templateUrl: './loan-delay.component.html',
  styleUrls: ['./loan-delay.component.css']
})
export class LoanDelayComponent {

  loan: Loan = new Loan();
  customer: Customer = new Customer();
  dueDate: any = this.loan.endDate;
  currentDate: any = new Date().toLocaleDateString();
  difference = this.currentDate - this.dueDate;


  constructor(
    private service: LoanService,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.loan.id = +this.route.snapshot.paramMap.get('id');
    this.findById(this.loan.id);
  }

  findById(id: number) {
    this.service.findById(id).subscribe(response => {
      this.loan = response;
    })
  }

  delay() {
    this.findCustomerToPenalty();
    this.loan.status = 2;
    this.service.update(this.loan).subscribe(response => {
      this.loan = response;
      this.router.navigate(['/loan-management'])
    })
  }

  findCustomerToPenalty(){
    this.customerService.findById(this.loan.customer).subscribe(response => {
      this.customer = response;
    })
  }

  penaltyCustomer(){    
    if(this.difference < 10){
      this.customer.daysOfPenalty = 2;
    } else if (this.difference >= 10) {
      this.customer.daysOfPenalty = 7
    } 
  }

}