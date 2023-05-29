import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router, 
    private authService: AuthService,
    private toastr: ToastrService
    ){

  }

  ngOnInit(): void {

  }

  logout(){
    this.router.navigate(['/login']);
    this.authService.lougout();
    this.toastr.info('You have successfully logged out!', null, { timeOut: 7000 })
  }

}
