describe("should create order", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("GET", "ingredients", { fixture: "ingredients.json" });
    cy.intercept("GET", "user", { fixture: "user.json" });
    cy.intercept("POST", "login", { fixture: "user.json" }).as("postLogin");
    cy.intercept("POST", "orders", { fixture: "order.json" }).as("postOrder");

    cy.setCookie("token", "mock-token");
    cy.setCookie("refreshToken", "mock-refresh-token");
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it("should create an order! Happy road of unauth user.", () => {
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

    // Нажимаем кнопку создать заказ.
    cy.get('[data-cy="btn-create-order"]').contains("Оформить заказ").click();

    // Авторизуемся.
    cy.get('[data-cy="email"]').type("user@yandex.ru");
    cy.get('[data-cy="password"]').type("user-password{enter}");

    // Проверяем, что в POST запрос авторизации переданы ожидаемые данные
    cy.wait("@postLogin").its("request.body").should("deep.equal", {
      email: "user@yandex.ru",
      password: "user-password",
    });

    // Нажимаем кнопку создать заказ.
    cy.get('[data-cy="btn-create-order"]').contains("Оформить заказ").click();

    // Проверяем, что появилось модальное окно с ожидаемым номером заказа.
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="modal"]').contains("999");
  });
});
