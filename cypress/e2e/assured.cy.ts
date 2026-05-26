/// <reference types="cypress" />

describe('Assured', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('loads the example site', () => {
    cy.url().should('include', 'example.cypress.io')
  })
})
