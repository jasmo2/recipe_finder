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

describe("Searching Recipes", () => {
  it("search", () => {
    const serachParam = "pan"
    cy.intercept(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachParam}`
    ).as("input-search")
    cy.visit("/")
    cy.get('[data-test="search-navbar"]').should("not.be.visible")
    cy.get('[aria-label="search a recipe"]').should("to.exist").click()
    cy.get('[data-test="search-navbar"]').should("to.be.visible")
    cy.get('[placeholder="I\'m craving..."]')
      .should("to.have.focus")
      .type(serachParam)
    cy.wait("@input-search")
    cy.get('[data-test="card"]').its("length").should("be.gt", 0)
  })
})
