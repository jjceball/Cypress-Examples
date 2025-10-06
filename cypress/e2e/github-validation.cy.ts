/// <reference types="cypress" />

/**
 * GitHub Validation Test Suite
 * 
 * Basic outline for testing GitHub-related functionality
 */

describe('GitHub Validation', () => {
  
  beforeEach(() => {
    // Setup before each test
    cy.viewport(1920, 1080);  
    cy.visit('https://github.com/jjceball')
  })

  describe('Core Tests for User Profile', () => {
    it('should have avatar present', () => {
      cy.get('.avatar').should('exist')
    })

    it('should contain expected name', () => {
      cy.get('.p-name').contains('Jay Ceballos')
    })

    it('should display username', () => {
      cy.get('.p-nickname').contains('jjceball')
    })

    it('validate follow button', () => {
      cy.get('.flex-1 > .user-following-container > .follow > .btn').should('have.text', 'Follow')
      cy.get('.flex-1 > .user-following-container > .follow > .btn').click()
      cy.get('.SessionsAuthHeader-module__authFormHeaderTitle--HKSM6').should('exist')
    })

    it('validate follows and following', () => {
      cy.get('[href="https://github.com/jjceball?tab=followers"]').should('be.visible').click()
      cy.get('[href="https://github.com/jjceball?tab=following"]').should('be.visible').click()
    })

    it('validates location', () => {
      cy.get('.p-label').should('have.text', 'Denver, Colorado')
    })

    it('LinkedIn Link', () => {
      cy.get('.Link--primary').should('not.equal', 'linkedin.com/in/jcebalos')
    })

    it('Search bar validation', () => {
      cy.get('.header-search-button > .flex-1')
        .should('be.visible')
        .should('contain', 'Search')
        .click()
      cy.get('[name="query-builder-test"]')
        .click()
        .type('Cypress Examples')
    })
  })
})
