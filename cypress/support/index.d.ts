/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>

    /**
     * Custom command to login to GitHub
     * @example cy.githubLogin('username', 'password')
     */
    githubLogin(username: string, password: string): Chainable<void>

    /**
     * Custom command to wait for GitHub page to load
     * @example cy.waitForGitHubPage()
     */
    waitForGitHubPage(): Chainable<void>
  }
}

