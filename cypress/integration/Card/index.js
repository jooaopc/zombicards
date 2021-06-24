import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Acesso à página', () => {
  cy.visit('/')
})

Then('Vejo o verso da carta de zumbi', () => {
  cy.get('[alt="verso carta de zumbi"]').should('be.visible')
})
