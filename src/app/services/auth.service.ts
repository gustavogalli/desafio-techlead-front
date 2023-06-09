import { Injectable } from '@angular/core';
import { Credentials } from '../models/Credentials';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService  = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(credentials: Credentials){
      return this.http.post(`${API_CONFIG.baseUrl}/login`, credentials, {
        observe: 'response',
        responseType: 'text'
      });
  }

  successfulLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }
  
  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  lougout(){
    localStorage.clear();
  }
}
