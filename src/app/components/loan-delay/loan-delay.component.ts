import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/models/Loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-delay',
  templateUrl: './loan-delay.component.html',
  styleUrls: ['./loan-delay.component.css']
})
export class LoanDelayComponent {

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

  delay() {
    console.log('antes')
    console.log(this.loan)
    this.loan.status = 2;
    console.log('depois')
    console.log(this.loan)
    this.service.update(this.loan).subscribe(response => {
      this.loan = response;
      this.router.navigate(['/loan-management'])
    })


  }

}