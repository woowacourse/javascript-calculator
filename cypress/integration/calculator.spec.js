describe('Calculator Test', () => {
    it('두 수를 더할 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      cy.get('.digit').contains(2).click();
      cy.get('.operation').contains('+').click();
      cy.get('.digit').contains(9).click();
      cy.get('.operation').contains("=").click();
      cy.get('#total').should('have.text', '11');
    });

    it('두 수를 뺄 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      cy.get('.digit').contains(2).click();
      cy.get('.operation').contains('-').click();
      cy.get('.digit').contains(9).click();
      cy.get('.operation').contains("=").click();
      cy.get('#total').should('have.text', '-7');
    });

    it('두 수를 곱할 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      cy.get('.digit').contains(2).click();
      cy.get('.operation').contains('X').click();
      cy.get('.digit').contains(9).click();
      cy.get('.operation').contains("=").click();
      cy.get('#total').should('have.text', '18');
    });

    it('두 수를 나눌 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      cy.get('.digit').contains(9).click();
      cy.get('.operation').contains('/').click();
      cy.get('.digit').contains(3).click();
      cy.get('.operation').contains("=").click();
    });

    it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
      cy.visit('index.html');

      cy.get('.modifier').contains('AC').click();
      cy.get('#total').should('have.text', '0');
    });

    it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
      cy.visit('index.html');

      cy.get('.digit').contains(1).click();
      cy.get('.digit').contains(2).click();
      cy.get('.digit').contains(3).click();
      cy.get('.digit').contains(4).click();
      cy.get('#total').should('have.text', '123');
    });

    it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
      cy.visit('index.html');

      cy.get('.digit').contains(8).click();
      cy.get('.operation').contains('/').click();
      cy.get('.digit').contains(3).click();
      cy.get('.operation').contains("=").click();
      cy.get('#total').should('have.text', '2');
    });
});
