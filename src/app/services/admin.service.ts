import { Injectable } from '@angular/core';
import { Admin } from '../models/Admin';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Admin>{
    return this.http.get<Admin>(`${API_CONFIG.baseUrl}/admin/${id}`);
  }

  findByEmail(email: string): Observable<Admin>{
    return this.http.get<Admin>(`${API_CONFIG.baseUrl}/admin/email/${email}`)
  }
}
