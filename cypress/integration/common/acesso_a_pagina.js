import { Given } from "cypress-cucumber-preprocessor/steps";

Given('Acesso à página', () => {
  cy.visit('/')
})
