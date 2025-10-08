/*
* Example test suite for Cleerly interview 
*/

/// <reference types="cypress" />

import "cypress-real-events";

/*
* Tests for Provider Sign In Flow
*/

describe('Provider Sign In flow', () => {
    beforeEach(() => {
        // Setup before each test
        cy.viewport(1920, 1080);
        cy.visit('https://cleerlyhealth.com/');
        cy.contains('Provider Sign In').should('be.visible');
        cy.contains('Provider Sign In').invoke('removeAttr', 'target') // Removes the target attribute
            .click();
    });

    it('Verify initial elements on page + screenshot', () => {
        cy.origin('https://labs.cleerlyhealth.com', () => {
            cy.get('.logo').should('be.visible');
            cy.get("#email").should('be.visible');
            cy.get('[type=submit]').should('be.visible')
                .should('be.disabled');
            cy.get('.help').should('be.visible');
            cy.get('.help').contains('Request Access');
            cy.screenshot('Labs CleerlyHealth Landing')
        });
    });

    it('Invalid Credentials', () => {
        cy.origin('https://labs.cleerlyhealth.com', () => {
            cy.get("#email").should('be.visible').type('jjceball@gmail.com');
            cy.get('[type=submit]').should('be.enabled').click();
            cy.get('#password').should('be.visible').type('Testing123');
            cy.get('[type=submit]').should('be.enabled').click();
            cy.get('.form-errors').should('be.visible');
        });
    });

    it('Forgot Password flow', () => {
        cy.origin('https://labs.cleerlyhealth.com', () => {
            cy.get("#email").should('be.visible').type('jjceball1@gmail.com');
            cy.get('[type=submit]').should('be.enabled').click();
            cy.contains('Forgot password').click();

            // Verify elements in modal and click reset
            cy.get('.ant-modal-content').should('be.visible');
            cy.get('.email').should('have.text', 'jjceball1@gmail.com');
            cy.contains('Cancel').should('be.visible');
            cy.get('.ant-btn-primary').should('be.enabled').click();

            // Verify upper right success
            cy.get('.success').should('be.visible');
        });
    });
});

/*
* Tests for Home Page Validation
*/

describe('Cleerly Home Page Validation', () => {
    beforeEach(() => {
        // Setup before each test
        cy.viewport(1920, 1080);
        cy.visit('https://cleerlyhealth.com/');
    });

    describe('Navigation Header Tests', () => {
        it('Cleerly logo + screenshot', () => {
            cy.get('.logo-sticky').should('exist');
            cy.screenshot('Cleerly Home Page Logo');
        });

        it('Navigation Header', () => {
            cy.get('#hhs-main-nav').should('be.visible');
        });
        
        it('For HCPs dropdown', () => {
            cy.get('.hhs-nav-links > :nth-child(1)').then(($for_hcps) => {
                const txt = $for_hcps.text();
                expect(txt).contains('For HCPs');
            });

            cy.get('.hhs-nav-links > :nth-child(1)').realHover();
            cy.get('.hs-menu-children-wrapper').contains('What is Cleerly');
            cy.get('.hs-menu-children-wrapper').contains('Cleerly Products');
            cy.get('.hs-menu-children-wrapper').contains('Billing Guidelines');
            cy.get('.hs-menu-children-wrapper').contains('Resources');
        });

        it('For Patients dropdown', () => {
            cy.get('.hhs-nav-links > :nth-child(2)').then(($for_patients) => {
                const txt = $for_patients.text();
                expect(txt).contains('For Patients');
            });

            cy.get('.hhs-nav-links > :nth-child(2)').realHover();
            cy.get('.hs-menu-children-wrapper').contains('Patient Education');
            cy.get('.hs-menu-children-wrapper').contains('FAQs');
        });
        
        it('For Payors & Providers dropdown', () => {
            cy.get('.hhs-nav-links > :nth-child(3)').then(($for_payors_and_providers) => {
                const txt = $for_payors_and_providers.text();
                expect(txt).contains('For Payors & Providers');
            });

            cy.get('.hhs-nav-links > :nth-child(3)').realHover();
            cy.get('.hs-menu-children-wrapper').contains('Billing Guidelines');
            cy.get('.hs-menu-children-wrapper').contains('Costs & Coverage');
        });

        it('About dropdown', () => {
            cy.get('.hhs-nav-links > :nth-child(4)').then(($about) => {
                const txt = $about.text();
                expect(txt).contains('About');
            });

            cy.get('.hhs-nav-links > :nth-child(4)').realHover();
            cy.get('.hs-menu-children-wrapper').contains('Leadership');
            cy.get('.hs-menu-children-wrapper').contains('Board of Directors');
            cy.get('.hs-menu-children-wrapper').contains('Blog');
            cy.get('.hs-menu-children-wrapper').contains('Newsroom');
            cy.get('.hs-menu-children-wrapper').contains('Careers');
        });

        it('Contact', () => {
            cy.get('.hhs-nav-links > :nth-child(5)').then(($contact) => {
                const txt = $contact.text();
                expect(txt).contains('Contact');
            });
            
            cy.contains('Contact').click();
            cy.get('h1').should('have.text', 'Contact Cleerly')
        });

    /*
    * Request a Demo workflow
    */ 
    describe('Request a Demo', () => {
        it('See the Cleerly difference flow', () => {
            cy.contains('See the Cleerly Difference').click();
            cy.wait(3000)
            cy.get('.hs-button').click();
            cy.get('.hs-error-msg').should('be.visible');

            // Input fields from fixture to resolve errors
            cy.fixture('cleerly.json').then((userInfo) => {
                cy.get('[name="firstname"]').type(userInfo.first_name);
                cy.get('[name="lastname"]').type(userInfo.last_name);
                cy.get('[name="email"]').type(userInfo.email);
                cy.get('[name="phone"]').type(userInfo.phone_number);
                cy.get('[name="jobtitle"]').type(userInfo.job_title);
                cy.get('[name="company"]').type(userInfo.company_name);
                cy.get('[name="city"]').type(userInfo.city);
                cy.get('[name="state"]').type(userInfo.state);
                cy.get('[name="location"]').select('United States');
                cy.get('[name="zip"]').type(userInfo.postal_code);
                cy.get('[name="i_am_a___"]').select('Patient');
            });
        })        

        it('Request a Demo button happy path', () => {
            // Click request a demo button
            cy.get('#hs-cta-195956482489-0 > .hs-inline-web-interactive-195956482489').as('request_demo_button').should('be.visible');
            cy.get('@request_demo_button').click();
            cy.wait(3000)
            cy.url().should('include', 'request-a-demo-of-cleerly?hsCtaAttrib=195956482489');

            // Validate What best describes you? choice
            cy.get('[data-industry="Cardiology practice"]', { timeout: 5000 })
                .should('be.visible')
                .should('have.text', 'Cardiology practice')
                .click();

            // Select next and validate what would you like to accomplish
            cy.get('.question-1 > .next-question').should('be.visible').click();

            cy.get('[data-industry="Improve CAD diagnostic accuracy"]')
                .should('be.visible')
                .should('have.text', 'Improve CAD diagnostic accuracy')
                .click();

            // Select next and click submit to trigger errors
            cy.get('.question-2 > .next-question').should('be.visible').click();
            cy.get('.hs-button').click();
            cy.get('.hs-error-msg').should('be.visible');

            // Input fields from fixture to resolve errors
            cy.fixture('cleerly.json').then((userInfo) => {
                cy.get('[name="firstname"]').type(userInfo.first_name);
                cy.get('[name="lastname"]').type(userInfo.last_name);
                cy.get('[name="email"]').type(userInfo.email);
                cy.get('[name="company"]').type(userInfo.company_name);
                cy.get('[name="jobtitle"]').type(userInfo.job_title);
                cy.get('[name="phone"]').type(userInfo.phone_number);
                cy.get('[name="city"]').type(userInfo.city);
                cy.get('[name="state"]').type(userInfo.state);
                cy.get('[name="location"]').select('United States')
                cy.get('[name="zip"]').type(userInfo.postal_code);
            });
        });
    });
    });
});