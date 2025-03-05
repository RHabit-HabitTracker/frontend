import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Quote } from '../types/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://dummyjson.com/quotes/random';

  constructor(private http:HttpClient) { }

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.apiUrl);
  }
}
