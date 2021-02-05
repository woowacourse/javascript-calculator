describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501/');
  });

  it('print digits & operators on display', () => {
    cy.get('.digit').then(digits => {
      const digitsArr = [];

      for (let i = 0; i < 3; i++) {
        digitsArr.push(digits[Math.floor(Math.random() * 10)]);
        digitsArr[i].click();
      }

      const result = parseInt(
        digitsArr[0].innerText + digitsArr[1].innerText + digitsArr[2].innerText,
        10,
      );

      cy.get('#total').should('have.text', result);
    });

    cy.get('.operator').then(operators => {
      for (let operator of operators) {
        operator.click();
        cy.get('#total').contains(operator.innerText);
      }
    });
  });

  const pressNumbers = (length, digitElements, digitsArr) => {
    for (let i = 0; i < length; i++) {
      const digit = digitElements[Math.floor(Math.random() * 10)];

      digitsArr.push(digit.innerText);
      digit.click();
    }
  }

  it('implement operations', () => {
    cy.get('.digit').then(digits => {
      const length_1 = Math.floor(Math.random() * 3) + 1;
      const length_2 = Math.floor(Math.random() * 3) + 1;
      const digit_1 = [];
      const digit_2 = [];

      cy.get('.operator').then(operators => {
        pressNumbers(length_1, digits, digit_1);

        const op = operators[Math.floor(Math.random() * 4)];
        const opText = op.innerText;
        op.click();

        pressNumbers(length_2, digits, digit_2);

        const num_1 = parseInt(digit_1.join(''), 10);
        const num_2 = parseInt(digit_2.join(''), 10);
        let result;

        if (opText === '+') {
          result = num_1 + num_2;
        } else if (opText === '-') {
          result = num_1 - num_2;
        } else if (opText === 'X') {
          result = num_1 * num_2;
        } else {
          result = num_1 / num_2;
          cy.get('#equal').click();
          cy.get('#total').should('have.text', Math.floor(result));

          return;
        }

        cy.get('#equal').click();
        cy.get('#total').should('have.text', result);
      });
    });
  });

  it('print 0 when click AC', () => {
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  const pressNumberOverThree = (digitElements, digitsArr) => {
    const length = 4;

    for (let i = 0; i < length; i++) {
      const digit = digitElements[Math.floor(Math.random() * 10)];

      digitsArr.push(digit.innerText);
      digit.click();

      if (digitsArr.length > 3) {
        cy.on('window:alert', str => {
          expect(str).to.equal('숫자는 3자리까지만 입력이 가능합니다.');
        });
        cy.on('window:confirm', () => true);

        digitsArr.pop();
      }
    }
  }

  it('3 digit limitation', () => {
    cy.get('.digit').then(digits => {
      const digit_1 = [];
      const digit_2 = [];

      cy.get('.operator').then(operators => {
        const randomNumber = Math.floor(Math.random() * 4);

        pressNumberOverThree(digits, digit_1);
        operators[randomNumber].click();
        pressNumberOverThree(digits, digit_2);
      });
    });
  });
});
