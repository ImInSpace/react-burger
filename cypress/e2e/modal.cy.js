describe("modal window tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open ingredient modal", () => {
    // Нажимаем на ингредиент.
    cy.contains("Краторная булка N-200i").click();
    // Проверяем, что модалка открылась.
    cy.get('[data-cy="modal"]').should("be.visible");
  });

  it("should contain ingredients data in modal", () => {
    // Нажимаем на ингредиент.
    cy.contains("Краторная булка N-200i").click();

    // Проверяем, что модалка открылась с необходимыми данными.
    cy.get('[data-cy="modal"]').contains("Краторная булка N-200i");
    cy.get('[data-cy="modal"]').contains("Калории,ккал");
    cy.get('[data-cy="modal"]').contains("420");
  });

  it("should close modal when button X clicked", () => {
    // Нажимаем на ингредиент.
    cy.contains("Краторная булка N-200i").click();

    // Проверяем, что модалка открылась.
    cy.get('[data-cy="modal"]');

    // Нажимаем на кнопку закрытия.
    cy.get('[data-cy="close-btn"]').click();
  });
});
