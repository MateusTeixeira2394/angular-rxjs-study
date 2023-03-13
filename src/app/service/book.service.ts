import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import Item from '../model/item.interface';
import ResultBook from '../model/resultBook.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { };

  search(typedValue: string): Observable<ResultBook> {

    const params = new HttpParams().append('q', typedValue);

    return this.http.get<ResultBook>(this.API, { params });
  };

};
