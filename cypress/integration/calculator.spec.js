describe('ui-counter', () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit('http://127.0.0.1:5500/');
  });

  it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    //  1. 초기에 표시되는 값은 0이다.
    cy.get('#total').should('have.text', '0');

    // 2. 1 2 3 을 차례대로 클릭한다. -> 표시되는 값은 1 12 123 이다.
    cy.get('.digits').contains('1').click();
    cy.get('#total').should('have.text', '1');

    cy.get('.digits').contains('2').click();
    cy.get('#total').should('have.text', '12');

    cy.get('.digits').contains('3').click();
    cy.get('#total').should('have.text', '123');

    // 3. '+'을 클릭한다. -> '+'버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('+').click();
    cy.get('.operations')
      .contains('+')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');

    // 4. 4를 클릭한다. -> '+'버튼의 배경색이 rgb(255, 165, 0), 글자색이 rgb(0, 0, 0)으로 변경되고 표시값은 4이다.
    cy.get('.digits').contains('4').click();
    cy.get('#total').should('have.text', '4');
    cy.get('.operations')
      .contains('+')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    //    5. 5 6을 차례대로 클릭한다 -> 표시값은 45 456이다.
    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '45');

    cy.get('.digits').contains('6').click();
    cy.get('#total').should('have.text', '456');

    // 6. '='을 클릭한다. -> 표시되는 값은 579이 되고, '='버튼의 배경색이 white로, 글자색이 Orange로 변경된다.
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '579');
    cy.get('.operations')
      .contains('=')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');
  });

  it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    //  1. 초기에 표시되는 값은 0이다.
    cy.get('#total').should('have.text', '0');

    // 2. 6 0 4 을 차례대로 클릭한다. -> 표시되는 값은 6 60 604 이다.
    cy.get('.digits').contains('6').click();
    cy.get('#total').should('have.text', '6');

    cy.get('.digits').contains('0').click();
    cy.get('#total').should('have.text', '60');

    cy.get('.digits').contains('4').click();
    cy.get('#total').should('have.text', '604');

    // 3. '-'을 클릭한다. -> '-'버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('-').click();
    cy.get('.operations')
      .contains('-')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');

    // 4. 9를 클릭한다. -> '-'버튼의 배경색이 Orange로, 글자색이 black으로 변경되고표시값은 9이다.
    cy.get('.digits').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.operations')
      .contains('-')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    // 5. 8 7을 차례대로 클릭한다 -> 표시값은 98 987이다.
    cy.get('.digits').contains('8').click();
    cy.get('#total').should('have.text', '98');

    cy.get('.digits').contains('7').click();
    cy.get('#total').should('have.text', '987');

    // '='을 클릭한다. -> 표시되는 값은 -383이 되고, '='버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '-383');
    cy.get('.operations')
      .contains('=')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');
  });

});
