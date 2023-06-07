describe("Navigation to Static Pages", () => {
  beforeEach(()=> {
    cy.visit("http://localhost:3000")
  })
  it("Should show Electrolysis content", () => {
    cy.contains("Electrolysis").click()
    cy.location("pathname").should("eq", "/Electrolysis")
    cy.get("main")
    .get("h1").should("contain", "Electrolysis")
    cy.go("back")
  })
  it("Should show Services content", () => {
    cy.contains("Services").click()
    cy.location("pathname").should("eq", "/Services")
    cy.get("main").get("h1").should("contain", "Services")
    cy.go("back")
  })

  it("Should show AboutMe content", () => {
    cy.contains("About Me").click()
    cy.location("pathname").should("eq", "/AboutMe")
    cy.get("main").get("h1").should("contain", "About Me")
    cy.go("back")
  })
})