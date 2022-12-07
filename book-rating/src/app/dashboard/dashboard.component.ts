import { Component } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {



}




class Book {
  title: string = '';
  isbn: string = '';

  constructor(title: string, isbn: string) {

    if (title != 'Angular') throw 'Fehler';

    this.title = title;
    this.isbn = isbn;
  }
}


interface Book2 {
  title: string;
  isbn: string;
}
