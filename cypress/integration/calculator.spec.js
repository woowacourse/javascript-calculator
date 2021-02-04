describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('숫자버튼을 눌렀을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.', () => {
    cy.get('#total').then((display) => {
      const displayText = display.text();
      //console.log(`displayText: ${displayText}`);

      cy.get('.digits').contains('1').click();
      cy.get('#total').should('have.text', '1');
    });
  });

  it('숫자버튼 입력 후 연산자를 클릭했을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.', () => {
    cy.get('#total').then((display) => {
      const displayText = display.text();
      console.log(`displayText: ${displayText}`);

      cy.get('.digits').contains('1').click();
      cy.get('.operations').contains('/').click();
      cy.get('#total').should('have.text', displayText + '/');
    });
  });

  it('네자리 이상의 숫자가 입력됐을 경우 경고메세지가 뜬다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get('#total').then(() => {
      for (let i = 0; i < 3; i++) {
        cy.get('.digits').contains('1').click();
      }
      cy.get('.digits')
        .contains('1')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('I am an alert box!');
        });
      cy.get('.operations').contains('/').click();
      for (let i = 0; i < 3; i++) {
        cy.get('.digits').contains('1').click();
      }
      cy.get('.digits')
        .contains('1')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('I am an alert box!');
        });

      cy.get('#total').should('have.text', '111/111');
    });
  });
});
