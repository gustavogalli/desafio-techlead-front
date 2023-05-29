import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Librarian } from '../models/Librarian';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Librarian>{
    return this.http.get<Librarian>(`${API_CONFIG.baseUrl}/admin/${id}`);
  }

  findByEmail(email: string): Observable<Librarian>{
    return this.http.get<Librarian>(`${API_CONFIG.baseUrl}/admin/email/${email}`)
  }
}
