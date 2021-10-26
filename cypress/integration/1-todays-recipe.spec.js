/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Today's Recipe", () => {
  it("renders 5 recipes", () => {
    cy.visit("/")
    cy.get("h1").should("to.have.text", "Loading recipes of the day...")
    cy.get("h1").should("to.have.text", "Recipes of the day")
    cy.get('[data-test="card"]').should("have.length", 5)
  })

  it("should display error message if no data", () => {
    cy.intercept("https://www.themealdb.com/api/json/v1/1/random.php", {
      statusCode: 500,
    }).as("errorRequest")
    cy.visit("/")
    cy.wait("@errorRequest")
    cy.get("h1").contains("Oops!")
  })
})
