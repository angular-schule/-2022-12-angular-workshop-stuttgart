import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '000',
    title: 'Anguar',
    description: 'Tolles Buch',
    rating: 5
  },{
    isbn: '111',
    title: 'AnguarJS',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Veraltetes Buch',
    rating: 1
  }];




}
