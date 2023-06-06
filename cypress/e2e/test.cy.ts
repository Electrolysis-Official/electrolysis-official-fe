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
  
})