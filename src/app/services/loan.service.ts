import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../models/Loan';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  create(loan: Loan): Observable<Loan>{
    return this.http.post<Loan>(`${API_CONFIG.baseUrl}/loan`, loan);
  }
}
