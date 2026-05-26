/// <reference types="cypress" />

const ASSURED_URL = 'https://www.assured.com/'
const THANK_YOU_URL = `${ASSURED_URL}thankyou`
const DESKTOP_VIEWPORT = { width: 1920, height: 1080 } as const

const demoFormData = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe.qa@example.com',
  phone: '2025550176',
}

const headerScheduleDemoButton = () =>
  cy.get('[class*="Header-module"]').contains('button', 'Schedule a demo')

/** Open demo modal (background loses `inert` when visible). */
const openDemoModal = () =>
  cy.get('[class*="Modal-module"][class*="background"]').should(($modal) => {
    expect($modal).to.not.have.attr('inert')
    expect($modal).to.have.css('opacity', '1')
  })

const openDemoModalFromHeader = () => {
  headerScheduleDemoButton().should('be.visible').click()
  openDemoModal()
  cy.contains('h2', 'Ready to get in touch?', { timeout: 10000 }).should('be.visible')
}

const fillDemoForm = () => {
  cy.get('input[name="firstname"]').type(demoFormData.firstName)
  cy.get('input[name="lastname"]').type(demoFormData.lastName)
  cy.get('input[name="email"]').type(demoFormData.email)
  cy.get('input[name="phone"]').type(demoFormData.phone)
}

describe('Assured — Schedule a demo (header)', () => {
  beforeEach(() => {
    cy.viewport(DESKTOP_VIEWPORT.width, DESKTOP_VIEWPORT.height)
    cy.visit(ASSURED_URL)
  })

  it('opens the demo request modal when the header button is clicked', () => {
    openDemoModalFromHeader()

    openDemoModal().within(() => {
      cy.contains('A sales representative will reach out to schedule a demo.').should(
        'be.visible',
      )
      cy.get('input[placeholder="First name"]').should('be.visible')
      cy.get('input[placeholder="Last name"]').should('be.visible')
      cy.get('input[placeholder="Work email"]').should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
    })
  })

  it('does not submit the demo form when required fields are empty', () => {
    openDemoModalFromHeader()

    openDemoModal().within(() => {
      cy.get('input[placeholder="Work email"]').should(($email) => {
        expect($email).to.have.attr('required')
        expect($email).to.have.value('')
      })

      cy.get('button[type="submit"]').click()

      cy.get('input[placeholder="Work email"]').should('have.value', '')
    })

    cy.url().should('eq', `${ASSURED_URL}`)
    cy.contains('h2', 'Ready to get in touch?').should('be.visible')
  })

  it('submits the demo form with valid data and shows the thank you page', () => {
    cy.intercept('POST', '**/api/contact').as('submitDemo')

    openDemoModalFromHeader()

    openDemoModal().within(() => {
      fillDemoForm()

      cy.get('input[name="firstname"]').should('have.value', demoFormData.firstName)
      cy.get('input[name="lastname"]').should('have.value', demoFormData.lastName)
      cy.get('input[name="email"]').should('have.value', demoFormData.email)
      cy.get('input[name="phone"]').should('have.value', '(202) 555-0176')

      cy.get('button[type="submit"]').click()
    })

    cy.wait('@submitDemo').then(({ request, response }) => {
      expect(response?.statusCode).to.be.oneOf([200, 201, 204])

      const payload = JSON.stringify(request.body)
      expect(payload).to.include(demoFormData.firstName)
      expect(payload).to.include(demoFormData.lastName)
      expect(payload).to.include(demoFormData.email)
    })

    cy.url({ timeout: 15000 }).should('eq', THANK_YOU_URL)
    cy.contains('h1', 'Thank you for reaching out!').should('be.visible')
    cy.contains(
      "We'll be in touch soon for your personalized walkthrough of the Assured platform.",
    ).should('be.visible')
    cy.contains('a', 'Back to homepage').should('have.attr', 'href', '/')
  })
})
