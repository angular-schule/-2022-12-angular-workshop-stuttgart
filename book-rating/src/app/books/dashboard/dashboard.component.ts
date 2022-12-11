import { Component } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Dieses Buch stellt Ihnen die Bausteine von Angular, viele Best Practices und die notwendigen Werkzeuge vor. Beginnen Sie Ihren Einstieg mit einer praxisnahen Einführung.',
    rating: 5
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts schrittweise an die Entwicklung mit dem clientseitigen Webframework AngularJS heran.',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Veraltetes Buch',
    rating: 1
  }];

  constructor(private br: BookRatingService) { }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
