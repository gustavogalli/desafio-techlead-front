import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  customer: Customer = new Customer();

  passwordCheck: string;

  constructor() { }

  ngOnInit() { 
    window.scroll(0, 0)
  }

  signup(){
  }

}