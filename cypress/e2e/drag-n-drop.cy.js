describe("drag-n-drop tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should drag ingredients to burger constructor.", () => {
    // Перетаскиваем ингредиент.
    cy.get('[data-cy="ingredients"]')
      .contains("Биокотлета из марсианской Магнолии")
      .trigger("dragstart");
    cy.get('[data-cy="burger-constructor"]').trigger("drop");

    // Перетаскиваем булку.
    cy.get('[data-cy="ingredients"]')
      .contains("Краторная булка N-200i")
      .trigger("dragstart");
    cy.get('[data-cy="burger-constructor"]').trigger("drop");
  });
});
