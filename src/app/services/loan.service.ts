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

  findAll(): Observable<Loan[]>{
    return this.http.get<Loan[]>(`${API_CONFIG.baseUrl}/loan`)
  }

  findById(id: number): Observable<Loan>{
    return this.http.get<Loan>(`${API_CONFIG.baseUrl}/loan/${id}`);
  }

  create(loan: Loan): Observable<Loan>{
    return this.http.post<Loan>(`${API_CONFIG.baseUrl}/loan`, loan);
  }

  update(loan: Loan): Observable<Loan>{
    return this.http.put<Loan>(`${API_CONFIG.baseUrl}/loan/${loan.id}`, loan);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/loan/${id}`);
  }
}
