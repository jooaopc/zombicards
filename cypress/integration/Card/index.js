import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Then('Vejo o verso da carta de zumbi', () => {
  cy.get('[alt="verso carta de zumbi"]').should('be.visible')
})
