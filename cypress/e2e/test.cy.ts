describe('Content of Home Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it('Should show the NavBar Contents', () => {
    cy.get("nav").should("be.visible")
    .should("contain", "Home")
    .should("contain", "Electrolysis")
    .should("contain", "Services")
    .should("contain", "About Me")
    .should("contain", "Client History and Consent Form")
    .should("contain", "Before/After Care")
  })
  it("Should show the Home Content", () => {
    cy.get("article")
    .get("h1").should("contain", "T4T Electrolysis")
    .get(".mainParagraph").should("be.visible")
    .get(".formLink").should("have.attr", "href")
    .and("include", "Client History and Consent Form")
  })
})