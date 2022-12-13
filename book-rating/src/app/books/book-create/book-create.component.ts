import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent {

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
  })
}
