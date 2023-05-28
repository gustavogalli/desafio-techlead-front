import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient){}
  
  findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${API_CONFIG.baseUrl}/books`);
  }

  findById(id: number): Observable<Book>{
    return this.http.get<Book>(`${API_CONFIG.baseUrl}/books/${id}`);
  }

  create(book: Book): Observable<Book>{
    return this.http.post<Book>(`${API_CONFIG.baseUrl}/books`, book);
  }

  update(book: Book): Observable<Book>{
    return this.http.put<Book>(`${API_CONFIG.baseUrl}/books/${book.id}`, book);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/books/${id}`);
  }

}
