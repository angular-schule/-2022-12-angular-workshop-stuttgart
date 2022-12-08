import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';

import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';


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
    NxCopytextModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
