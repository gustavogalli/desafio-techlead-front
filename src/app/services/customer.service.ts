import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${API_CONFIG.baseUrl}/customers`)
  }

  findById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${API_CONFIG.baseUrl}/customers/${id}`);
  }

  findByCpf(cpf: string): Observable<Customer>{
    return this.http.get<Customer>(`${API_CONFIG.baseUrl}/customers/cpf/${cpf}`);
  }

  findByEmail(email: string): Observable<Customer>{
    return this.http.get<Customer>(`${API_CONFIG.baseUrl}/customers/email/${email}`)
  }

  create(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${API_CONFIG.baseUrl}/customers`, customer);
  }

  update(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${API_CONFIG.baseUrl}/customers/${customer.id}`, customer);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/customers/${id}`);
  }

  
}
