describe("modal window tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open ingredient modal", () => {
    // Нажимаем на ингредиент.
    cy.contains("Краторная булка N-200i").click();
    // Проверяем, что модалка открылась.
    cy.get('[data-cy="modal"]');
  });
});
