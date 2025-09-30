/// <reference types="cypress" />

describe('TypeScript Example Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://example.cypress.io')
    })

    it('should demonstrate TypeScript support', () => {
        // TypeScript will provide intellisense and type checking
        cy.get('.navbar-brand').should('have.text', 'cypress.io')
    
        // You can define typed variables
        const expectedText: string = 'cypress.io'
        const selector: string = '.navbar-brand'
    
        cy.get(selector).should('have.text', expectedText)
    })

    it('should demonstrate type safety', () => {
        // TypeScript will catch type errors at compile time
        const url: string = 'https://example.cypress.io'
    
        cy.visit(url)
        cy.url().should('include', 'example.cypress.io')
    })

    it('top left button text', () => {
        cy.get('.navbar-brand').should('have.text', 'cypress.io')
    })

    it('top left button clickable', () => {
        cy.get('.navbar-brand').click()
        cy.url().should('include', 'example.cypress.io')
    })

    it('commands open', () => {
        cy.get('.dropdown-toggle').contains('Commands').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').should('have.text', 'Querying')
    })

    it('utilities open and header text', () => {
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').contains('Utilities').click()
        cy.get('h1').should('have.text', 'Utilities')
        cy.get('h1').should('exist')
    })

    it('type in email address', () => {
        cy.get('.dropdown-toggle').contains('Commands').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('#email1').type('qa@test.com')
        cy.get('#email1').should('have.length', 1)
    })


})
