describe("should create order", () => {
  beforeEach(() => {
    cy.visit("/login");

    const email = "fake-login@yandex.ru";
    const password = "fake-password";

    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);

    cy.intercept("POST", "login", { fixture: "login.json" }).as("postLogin");
    cy.intercept("GET", "user", { fixture: "user.json" });

    cy.setCookie("token", "fake-token");
    cy.setCookie("refreshToken", "fake-refresh-token");
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it("happy road", () => {
    cy.visit("/profile");
  });
});
