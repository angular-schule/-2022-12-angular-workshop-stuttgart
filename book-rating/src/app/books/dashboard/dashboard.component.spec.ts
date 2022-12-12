import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let bookRatingMock: BookRatingService

  beforeEach(async () => {

    bookRatingMock = {
      rateUp: (book: Book) => book
    } as BookRatingService

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        // Integration Test
        BookComponent
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should forward all calls to BookRatingService', () => {

    spyOn(bookRatingMock, 'rateUp').and.callThrough();

    const book = { } as Book;
    component.doRateUp(book);

    expect(bookRatingMock.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
