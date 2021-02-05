describe('Calculator test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Render initial value (0).', () => {
    cy.get('#total').should('have.text', '0');
  });

  it('Render digit when clicking digit button.', () => {
    cy.get(`[data-test-digit='1']`).click();
    cy.get('#total').should('have.text', '1');
  });

  it('Ignore only continuous input (0).', () => {
    for (let i = 0; i < 3; i++) {
      cy.get(`[data-test-digit='0']`).click();
    }
    cy.get('#total').should('have.text', '0');
  });

  it('Limit max digit length (3).', () => {
    for (let i = 1; i < 5; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get('#total').should('have.text', '123');
  });

  it('Can add number.', () => {
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='+']`).click();
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='=']`).click();
    cy.get('#total').should('have.text', '246');
  });

  it('Can subtract number.', () => {
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='-']`).click();
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='=']`).click();
    cy.get('#total').should('have.text', '0');
  });

  it('Can multiply number.', () => {
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='X']`).click();
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='=']`).click();
    cy.get('#total').should('have.text', '15129');
  });

  it('Can divide number.', () => {
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='/']`).click();
    for (let i = 1; i < 4; i++) {
      cy.get(`[data-test-digit='${i}']`).click();
    }
    cy.get(`[data-test-operator='=']`).click();
    cy.get('#total').should('have.text', '1');
  });

  it('Can all clear when clicking AC button.', () => {
    cy.get('.digit').contains('3').click();
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('Can format result (decimal => integer).', () => {
    cy.get('.digit').contains('3').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', 1);
  });

  it('Ignore first operator', () => {
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', 5);
  });
});
