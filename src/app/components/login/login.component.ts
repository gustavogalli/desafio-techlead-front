import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/Credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  constructor(
    private toastr: ToastrService, 
    private service: AuthService,
    private router: Router){

  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  login() {
    this.service.authenticate(this.credentials).subscribe(response => {
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.router.navigate(['/book-list']);
    }
    ,
     () => {
      this.toastr.error('Invalid email and/or password!');
    }
    )
  }

  validateFields(): boolean{
    return this.email.valid && this.password.valid;
  }
}