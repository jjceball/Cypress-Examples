/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Select an element by data-testid attribute.
       * @example cy.getByTestId('submit-button')
       */
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
