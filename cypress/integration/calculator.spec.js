describe('Calculator test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/index.html');
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

  // 소수점 계산을 했을 때 => 정수값으로 나오는지
  // 연산 값이 음수일 때 => '-' 나오는지
  // 초기화 버튼 눌렀을 때 => total 0
  // 0으로 나누었을 때 => total Infinity
  // 맨 처음에 연산 기호가 나왔을 때
});
