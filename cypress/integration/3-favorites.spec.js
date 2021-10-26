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

describe("Favorites", () => {
  it("should show the favorites recipes", () => {
    cy.visit("/")
    cy.get('[data-test="card"]').should("have.length", 5)
    cy.get('[aria-label="See my favorites"]').should("not.exist")
    cy.get('[data-test="card"]').first().click()
    cy.url().should("match", /-\d+$/)
    cy.get('[aria-label="add to favorites"]').should("exist").click()
    cy.visit("/favorites")
    cy.url().should("include", "/favorites")
    cy.get('[data-test="card"]').should("have.length", 1)
  })
})
