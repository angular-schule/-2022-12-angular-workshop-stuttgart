import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeMap, share, shareReplay, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => String(paramMap.get('isbn'))),
    switchMap(isbn => this.bs.getSingleBook(isbn))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {}
}
