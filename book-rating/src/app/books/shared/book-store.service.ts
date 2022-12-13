import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getSingleBook(isbn: string) {
    return this.http.get<Book>('https://api.angular.schule/books/' + isbn);
  }

  getAllBooks() {
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }
}
