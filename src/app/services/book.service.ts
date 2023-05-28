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
    return this.http.get<Book[]>('http://localhost:8080/books');
  }

}
