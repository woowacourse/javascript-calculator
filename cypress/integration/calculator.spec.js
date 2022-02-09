describe('My First Test', () => {
    it('두 수를 더할 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      // 2 + 9 테스트
      // 2 버튼을 누른다
      cy.get('.digit').contains(2).click();

      // 플러스 버튼을 누른다
      cy.get('.digit').contains('+').click();

      // 9 버튼을 누른다
      cy.get('.digit').contains(9).click();

      // = 버튼을 누른다
      cy.get('.digit').contains("=").click();

      // 11이 나오는지 확인한다
      cy.get('#total').should('have.text', '11');
    });

    it('두 수를 뺄 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      // 2 - 9 테스트
      // 2 버튼을 누른다
      cy.get('.digit').contains(2).click();

      // 플러스 버튼을 누른다
      cy.get('.digit').contains('-').click();

      // 9 버튼을 누른다
      cy.get('.digit').contains(9).click();

      // = 버튼을 누른다
      cy.get('.digit').contains("=").click();

      // -7이 나오는지 확인한다
      cy.get('#total').should('have.text', '-7');
    });

    it('두 수를 곱할 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      // 2 * 9 테스트
      // 2 버튼을 누른다
      cy.get('.digit').contains(2).click();

      // x 버튼을 누른다
      cy.get('.digit').contains('x').click();

      // 9 버튼을 누른다
      cy.get('.digit').contains(9).click();

      // = 버튼을 누른다
      cy.get('.digit').contains("=").click();

      // 18이 나오는지 확인한다
      cy.get('#total').should('have.text', '18');
    });

    it('두 수를 나눌 수 있어야 한다.', () => {
      cy.visit('index.html');
      
      // 9 / 3 테스트
      // 9 버튼을 누른다
      cy.get('.digit').contains(9).click();

      // 나눗셈 버튼을 누른다
      cy.get('.digit').contains('/').click();

      // 3 버튼을 누른다
      cy.get('.digit').contains(3).click();

      // = 버튼을 누른다
      cy.get('.digit').contains("=").click();

      // 3이 나오는지 확인한다
      cy.get('#total').should('have.text', '3');
    });
});
