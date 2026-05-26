/// <reference types="cypress" />

/**
 * TODO 6: Extend Cypress.Chainable with getByTestId
 *
 * @example cy.getByTestId('submit-button')
 */
declare global {
  namespace Cypress {
    interface Chainable {
      // getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
