/// <reference types="cypress" />

describe('First test suite', () => {

     it('first test', () => {
        
        //by tag name
        cy.get('input')


        //by ID
        cy.get('#inputEmail1')

        //by Class
        cy.get ('.input-full-width')

        //by Attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeholder="Email"]')
        
     })
        
}) 
