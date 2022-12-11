import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxRatingModule } from '@aposin/ng-aquila/rating';
import { NxIconModule } from '@aposin/ng-aquila/icon';



import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    NxCardModule,
    NxButtonModule,
    NxGridModule,
    NxHeadlineModule,
    NxCopytextModule,
    NxRatingModule,
    NxIconModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
