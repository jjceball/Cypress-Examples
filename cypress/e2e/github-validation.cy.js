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
      // Test GitHub navigation
    })

//     it('validates location', () => {
//       // Test GitHub navigation
//     })

//     it('LinkedIn Link', () => {
//       // Test GitHub navigation
//     })
  })

//   describe('Navigation Header Tests', () => {
//     it('should have correct GitHub URL', () => {
//       // Test GitHub URL validation
//     })

//     it('should open in new tab', () => {
//       // Test new tab functionality
//     })
//   })

//   describe('Repositories/Contributions Tests', () => {
//     it('should work with other elements', () => {
//       // Test integration with other page elements
//     })

//     it('should maintain functionality across pages', () => {
//       // Test cross-page functionality
//     })
//   })

})
