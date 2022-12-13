// eslint-disable-next-line @typescript-eslint/triple-slash-reference
// /// <reference path="../../../../cypress/support/component.d.ts" />

import { BookComponent } from "./book.component";

it('mounts', () => {
  cy.mount(BookComponent, {
    componentProperties: {
      book: {
        isbn: '000',
        title: 'Test Title',
        description: 'Component Test',
        rating: 5,
        price: 1
      },
    },
  });

  cy.get('h2').contains('Test Title');
})
