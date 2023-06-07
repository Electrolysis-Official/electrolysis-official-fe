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
})