import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements AfterViewInit {

  @ViewChild(FormGroupDirective)
  formDirective?: FormGroupDirective;

  @ViewChild('id')
  isbnElement?: ElementRef;

  bookForm = new FormGroup({

    isbn: new FormControl('' , {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),

    title: new FormControl('' , {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    }),

    rating: new FormControl(1 , {
      nonNullable: true,
      validators: [
        Validators.min(1),
        Validators.max(5)
      ]
    }),

    description: new FormControl('' , {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  @Output()
  create = new EventEmitter<Book>();

  ngAfterViewInit() {
    this.isbnElement?.nativeElement.focus();
  }

  submitBook(): void {

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      price: 1
    }

    this.create.emit(newBook);

    // weil ErrorStateMatcher auch form.submitted prüft
    // siehe https://allianz.github.io/ng-aquila/documentation/error-handling/overview
    this.formDirective?.resetForm();

    // normalerweise
    // this.bookForm.reset();
  }
}
