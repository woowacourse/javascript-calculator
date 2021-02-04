describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('숫자버튼을 눌렀을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.', () => {
    cy.get('#total').then((display) => {
      const prevInputText = display.text();
      console.log(`prevInputText: ${prevInputText}`);

      cy.get('.digits').contains('1').click();
      cy.get('#total').should('have.text', '1');
    });
  });
});
