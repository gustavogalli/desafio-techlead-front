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
      if(this.credentials.email.includes("admin@library.com")){
        localStorage.setItem('admin', this.credentials.email)
      } else {
        localStorage.setItem('email', this.credentials.email);
      }
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.toastr.success('You are logged in!', 'Success', {timeOut: 5000});
      this.router.navigate(['/home']);
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