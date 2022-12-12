import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        // Integration Test
        BookComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should forward all calls to BookRatingService', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    const book = { } as Book;
    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
