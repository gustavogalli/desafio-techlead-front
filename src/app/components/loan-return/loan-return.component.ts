import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/models/Loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-return',
  templateUrl: './loan-return.component.html',
  styleUrls: ['./loan-return.component.css']
})
export class LoanReturnComponent {

  loan: Loan = new Loan();

  constructor(
    private service: LoanService,
    private router: Router,
    private route: ActivatedRoute
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

  return() {
    this.loan.status = 9;
    this.service.update(this.loan).subscribe(response => {
      this.loan = response;
      this.router.navigate(['/loan-management'])
    })


  }

}