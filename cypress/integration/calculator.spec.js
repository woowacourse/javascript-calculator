describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501/');
  });

  it('print digits & operators on display', () => {
    cy.get('.digit').then(digits => {
      const digit1 = digits[Math.floor(Math.random() * 10)];
      const digit2 = digits[Math.floor(Math.random() * 10)];
      const digit3 = digits[Math.floor(Math.random() * 10)];

      digit1.click();
      digit2.click();
      digit3.click();

      const result = parseInt(digit1.innerText + digit2.innerText + digit3.innerText, 10);
      
      cy.get('#total').should('have.text', result);
    });

    cy.get('.operator').then(operators => {
      for (let operator of operators) {
        operator.click();
        cy.get('#total').contains(operator.innerText);
      }
    });
  });

  it('implement operations', () => {
    cy.get('.digit').then(digits => {
      const length_1 = Math.floor(Math.random() * 3) + 1;
      const length_2 = Math.floor(Math.random() * 3) + 1;
      const digit_1 = [];
      const digit_2 = [];

      cy.get('.operator').then(operators => {
        for (let i = 0; i < length_1; i++) {
          const digit = digits[Math.floor(Math.random() * 10)];

          digit_1.push(digit.innerText);
          digit.click();
        }

        const randomNumber = Math.floor(Math.random() * 4);
        const op = operators[randomNumber].innerText;
        operators[randomNumber].click();

        for (let i = 0; i < length_2; i++) {
          const digit = digits[Math.floor(Math.random() * 10)];

          digit_2.push(digit.innerText);
          digit.click();
        }

        const num1 = parseInt(digit_1.join(''), 10);
        const num2 = parseInt(digit_2.join(''), 10);
        let result;

        if (op === '+') {
          result = num1 + num2;
        } else if (op === '-') {
          result = num1 - num2;
        } else if (op === 'X') {
          result = num1 * num2;
        } else {
          result = Math.floor(num1 / num2);
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

  it('3 digit limitation', () => {
    cy.get('.digit').then(digits => {
      const length = 4;
      const digit_1 = [];
      const digit_2 = [];

      cy.get('.operator').then(operators => {
        for (let i = 0; i < length; i++) {
          const digit = digits[Math.floor(Math.random() * 10)];

          digit_1.push(digit.innerText);
          digit.click();
          
          if (digit_1.length > 3) {
            cy.on('window:alert', str => {
              expect(str).to.equal('숫자는 3자리까지만 입력이 가능합니다.');
            });
            cy.on('window:confirm', () => true);

            digit_1.pop();
          }
        }

        const randomNumber = Math.floor(Math.random() * 4);
        operators[randomNumber].click();

        for (let i = 0; i < length; i++) {
          const digit = digits[Math.floor(Math.random() * 10)];

          digit_2.push(digit.innerText);
          digit.click();

          if (digit_2.length > 3) {
            cy.on('window:alert', str => {
              expect(str).to.equal('숫자는 3자리까지만 입력이 가능합니다.');
            });
            cy.on('window:confirm', () => true);

            digit_2.pop();
          }
        }
      });
    })
  })
})
