/// <reference types="cypress" />

describe('Fundamentals Test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })

    it('passes', () => {
        cy.visit('https://example.cypress.io')
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


describe('API Testing', () => {
    it('should retrieve a list of users', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });
});


Cypress.Commands.add('login', (username: string, password: string) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login').click();
});
