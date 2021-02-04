describe('ui-counter', () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit('http://127.0.0.1:5500/');
    cy.window().then((win) => cy.stub(win, 'alert').as('windowAlert'));
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

  it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    //  1. 초기에 표시되는 값은 0이다.
    cy.get('#total').should('have.text', '0');

    // 2. 7 3을 차례대로 클릭한다. -> 표시되는 값은 73 이다.
    cy.get('.digits').contains('7').click();
    cy.get('#total').should('have.text', '7');

    cy.get('.digits').contains('3').click();
    cy.get('#total').should('have.text', '73');

    // 3. 'X'을 클릭한다. -> 'X'버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('X').click();
    cy.get('.operations')
      .contains('X')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');

    // 4. 2를 클릭한다. -> 'X'버튼의 배경색이 Orange로, 글자색이 black으로 변경되고표시값은 2이다.
    cy.get('.digits').contains('2').click();
    cy.get('#total').should('have.text', '2');
    cy.get('.operations')
      .contains('X')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    // 5. 3 을  클릭한다 -> 표시값은 23이다.
    cy.get('.digits').contains('3').click();
    cy.get('#total').should('have.text', '23');

    // '='을 클릭한다. -> 표시되는 값은 1679가 되고, '='버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '1679');
    cy.get('.operations')
      .contains('=')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');
  });

  it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    //  1. 초기에 표시되는 값은 0이다.
    cy.get('#total').should('have.text', '0');

    // 2. 1 4 4을 차례대로 클릭한다. -> 표시되는 값은 1 14 144 이다.
    cy.get('.digits').contains('1').click();
    cy.get('#total').should('have.text', '1');

    cy.get('.digits').contains('4').click();
    cy.get('#total').should('have.text', '14');

    cy.get('.digits').contains('4').click();
    cy.get('#total').should('have.text', '144');

    // 3. '/'을 클릭한다. -> '/'버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('/').click();
    cy.get('.operations')
      .contains('/')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');

    // 4. 1를 클릭한다. -> '/'버튼의 배경색이 Orange로, 글자색이 black으로 변경되고표시값은 1이다.
    cy.get('.digits').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.operations')
      .contains('/')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    // 5. 2을 클릭한다 -> 표시값은 12이다.
    cy.get('.digits').contains('2').click();
    cy.get('#total').should('have.text', '12');

    // 6. '='을 클릭한다. -> 표시되는 값은 12가 되고, '='버튼의 배경색이 white로, 글자색이 Orange로 변경된다
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.operations')
      .contains('=')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');
  });

  const testAfterACClick = () => {
    cy.get('#total').should('have.text', '0');
    cy.get('.digits').contains('1').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digits').contains('1').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '2');
  };

  it('첫번째 숫자가 입력되고 난 후 AC(All Clear)버튼을 누르면 0으로 초기화 한다. - case1', () => {
    cy.get('#total').should('have.text', '0');

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '5');

    cy.get('.modifier').click();
    testAfterACClick();
  });

  it('연산자가 입력되고 난 후 AC(All Clear)버튼을 누르면 0으로 초기화 한다. - case2', () => {
    cy.get('#total').should('have.text', '0');

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '5');

    cy.get('.operations').contains('X').click();

    cy.get('.modifier').click();

    cy.get('.operations')
      .contains('X')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    testAfterACClick();
  });

  it('두번째 숫자가 입력되고 난 후 AC(All Clear)버튼을 누르면 0으로 초기화 한다. - case3', () => {
    cy.get('#total').should('have.text', '0');

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '5');

    cy.get('.operations').contains('X').click();

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '5');

    cy.get('.modifier').click();
    testAfterACClick();
  });

  it('결과값이 표시되고 난 후 AC(All Clear)버튼을 누르면 0으로 초기화 한다. - case4', () => {
    cy.get('#total').should('have.text', '0');

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '5');

    cy.get('.operations').contains('X').click();

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '5');

    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '25');

    cy.get('.modifier').click();
    cy.get('.operations')
      .contains('=')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .should('have.css', 'color', 'rgb(0, 0, 0)');
    testAfterACClick();
  });

  it('숫자는 한번에 최대 3자리 수까지 입력이 가능하다', () => {
    // 1. 초기에 표시되는 값은 0이다.
    cy.get('#total').should('have.text', '0');

    // 2. 2 5 8를 차례대로 클릭한다 -> 표시되는 값은 2 25 258이다.
    cy.get('.digits').contains('2').click();
    cy.get('#total').should('have.text', '2');

    cy.get('.digits').contains('5').click();
    cy.get('#total').should('have.text', '25');

    cy.get('.digits').contains('8').click();
    cy.get('#total').should('have.text', '258');

    // 3. 6을 클릭한다 -> alert창으로 '3자리 이하의 숫자를 입력해주세요' 라는 문구가 표시되며, 표시되는 값은 여전히 258이다.
    cy.get('.digits').contains('6').click();
    cy.get('@windowAlert').should(
      'be.calledWith',
      '3자리 이하의 숫자를 입력해주세요.'
    );

    cy.get('#total').should('have.text', '258');

    // 4. '+' 버튼을 클릭한다.
    cy.get('.operations').contains('+').click();

    //5. 1 4 7을 차례대로 클릭한다. -> 1 14 147이 표시된다.
    cy.get('.digits').contains('1').click();
    cy.get('#total').should('have.text', '1');

    cy.get('.digits').contains('4').click();
    cy.get('#total').should('have.text', '14');

    cy.get('.digits').contains('7').click();
    cy.get('#total').should('have.text', '147');

    // 6. 9를 클릭한다. -> alert창으로 '3자리 이하의 숫자를 입력해주세요' 라는 문구가 표시되며, 표시되는 값은 여전히 147이다.
    cy.get('.digits').contains('9').click();
    cy.get('@windowAlert').should(
      'be.calledWith',
      '3자리 이하의 숫자를 입력해주세요.'
    );
    cy.get('#total').should('have.text', '147');
  });

  it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    // 1. 초기에 표시되는 값은 0이다.
    cy.get('#total').should('have.text', '0');

    // 2. 1 0을 차례대로 클릭한다. -> 표시되는 값은 10 이다.
    cy.get('.digits').contains('1').click();
    cy.get('.digits').contains('0').click();
    cy.get('#total').should('have.text', '10');

    // 3. '/'을 클릭한다.
    cy.get('.operations').contains('/').click();

    // 4. 3을 클릭한다 -> 표시값은 3이다.
    cy.get('.digits').contains('3').click();
    cy.get('#total').should('have.text', '3');

    //   5. '='을 클릭한다. -> 표시되는 값은 3이다
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '3');
  });

  it(' "="을 제외한 연산자는 마지막에 클릭한 연산자만 유효하다.', () => {
    const haveOrangeBackground = (op) =>
      cy
        .wrap(op)
        .should('have.css', 'background-color', 'rgb(255, 165, 0)')
        .should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('.operation').each(haveOrangeBackground);

    ['+', '-', 'X', '/', '-', '-', '-'].forEach((op) => {
      cy.get('.operations')
        .contains(op)
        .click()
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'color', 'rgb(255, 165, 0)');

      cy.get('.operation').not(`:contains("${op}")`).each(haveOrangeBackground);
    });
  });

  it("두번째 숫자를 입력한 후, '='을 제외한 연산자를 클릭하면 알림창이 나온다.", () => {
    [1, 2, 3].forEach((num) => cy.get('.digits').contains(num).click());

    cy.get('.operations').contains('+').click();
    [3, 2, 1].forEach((num) => cy.get('.digits').contains(num).click());
    cy.get('.operations').contains('+').click();
    cy.get('@windowAlert').should(
      'be.calledWith',
      '2개의 숫자에 대한 계산만 가능합니다.'
    );
    cy.get('#total').should('have.text', '321');

    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 123 + 321);
  });

  it('연산자 혹은 두번째 숫자가 입력되지 않은 상태에서 "="을 클릭하면 알림창이 나온다.', () => {
    cy.get('.operations').contains('=').click();
    cy.get('@windowAlert').should('be.calledWith', '연산자를 선택해주세요.');

    [4, 5, 6].forEach((num) => cy.get('.digits').contains(num).click());
    cy.get('#total').should('have.text', '456');

    cy.get('.operations').contains('=').click();
    cy.get('@windowAlert').should('be.calledWith', '연산자를 선택해주세요.');
    cy.get('#total').should('have.text', '456');

    cy.get('.operations').contains('+').click();

    cy.get('.operations').contains('=').click();
    cy.get('@windowAlert').should(
      'be.calledWith',
      '두번째 숫자를 입력해주세요.'
    );
    cy.get('#total').should('have.text', '456');
    cy.get('.operations')
      .contains('+')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');

    [7, 8, 9].forEach((num) => cy.get('.digits').contains(num).click());
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '1245');
    cy.get('.operations')
      .contains('=')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 165, 0)');
  });

  it('연산을 마친 후에는 숫자 및 연산자를 클릭하면 표시값은 변화되지 않고 알림창이 나온다.', () => {
    cy.get('.digits').contains('1').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digits').contains('1').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '2');

    cy.get('.digits').contains('1').click();
    cy.get('@windowAlert').should(
      'be.calledWith',
      'AC를 눌러 초기화를 해주세요.'
    );

    cy.get('.operations').contains('+').click();
    cy.get('@windowAlert').should(
      'be.calledWith',
      'AC를 눌러 초기화를 해주세요.'
    );

    cy.get('.modifier').click();

    cy.get('.digits').contains('9').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digits').contains('9').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '18');
  });
});
