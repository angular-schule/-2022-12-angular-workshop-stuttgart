import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    NxHeadlineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
