it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
  cy.visit('index.html');
  // 6을 누른다.
  cy.get('.digit').contains(6).click();
  // +를 누른다.
  cy.get('.operation').contains('+').click();
  // 3을 누른다.
  cy.get('.digit').contains(3).click();
  // =을 누른다.
  cy.get('.operation').contains('=').click();
  // 9가 도출된다.
  cy.get('#total').should('have.text', '9');
});

it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
  // 초기화 한다.
  cy.get('.modifier').click();
  // 5를 누른다.
  cy.get('.digit').contains(5).click();
  // -를 누른다.
  cy.get('.operation').contains('-').click();
  // 3을 누른다.
  cy.get('.digit').contains(3).click();
  // =을 누른다.
  cy.get('.operation').contains('=').click();
  // 2가 도출된다.
  cy.get('#total').should('have.text', '2');
});

it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
  // 초기화 한다.
  cy.get('.modifier').click();
  // 1을 누른다.
  cy.get('.digit').contains(1).click();
  // x을 누른다.
  cy.get('.operation').contains('X').click();
  // 7을 누른다.
  cy.get('.digit').contains(7).click();
  // =을 누른다.
  cy.get('.operation').contains('=').click();
  // 7이 도출된다.
  cy.get('#total').should('have.text', '7');
});

it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
  // 초기화 한다.
  cy.get('.modifier').click();
  // 6을 누른다.
  cy.get('.digit').contains(6).click();
  // /를 누른다.
  cy.get('.operation').contains('/').click();
  // 3을 누른다.
  cy.get('.digit').contains(3).click();
  // =을 누른다.
  cy.get('.operation').contains('=').click();
  // 2가 도출된다.
  cy.get('#total').should('have.text', '2');
});

it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
  // AC를 누른다.
  cy.get('.modifier').click();
  // 0이 도출된다.
  cy.get('#total').should('have.text', '0');
});

it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
  // 초기화 한다.
  cy.get('.modifier').click();
  // 7을 누른다.
  cy.get('.digit').contains(7).click();
  // 2을 누른다.
  cy.get('.digit').contains(2).click();
  // 3을 누른다.
  cy.get('.digit').contains(3).click();
  // 4을 누른다.
  cy.get('.digit').contains(4).click();
  // 723이 도출된다.
  cy.get('#total').should('have.text', '723');
});

it('숫자는 2개까지만 입력할 수 있다.', () => {
  // 초기화 한다.
  cy.get('.modifier').click();
  // 7을 누른다.
  cy.get('.digit').contains(7).click();
  // 2을 누른다.
  cy.get('.digit').contains(2).click();
  // +를 누른다.
  cy.get('.operation').contains('+').click();
  // 3을 누른다.
  cy.get('.digit').contains(3).click();
  // +를 누른다.
  cy.get('.operation').contains('+').click();
  // 2을 누른다.
  cy.get('.digit').contains(2).click();
  // =을 누른다.
  cy.get('.operation').contains('=').click();
  // 104가 도출된다.
  cy.get('#total').should('have.text', '104');
});

it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
  // 초기화 한다.
  cy.get('.modifier').click();
  // 7을 누른다.
  cy.get('.digit').contains(7).click();
  // /를 누른다.
  cy.get('.operation').contains('/').click();
  // 3을 누른다.
  cy.get('.digit').contains(3).click();
  // =을 누른다.
  cy.get('.operation').contains('=').click();
  // 2가 도출된다.
  cy.get('#total').should('have.text', '2');
});
