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

      const result = digit1.innerText + digit2.innerText + digit3.innerText;
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
    const length_1 = Math.floor(Math.random() * 3) + 1;
    const length_2 = Math.floor(Math.random() * 3) + 1;
    const inputs = []; 

    cy.get('.digit').then(digits => {
      cy.get('.operator').then(operators => {
        for (let i = 0; i < length_1; i++) {
          const digit = digits[Math.floor(Math.random() * 10)];
  
          inputs.push(digit.innerText);
          digit.click();
        }

        const randomNumber = Math.floor(Math.random() * 4);
        const op = operators[randomNumber].innerText;
        if (op === 'X') {
          inputs.push('*');
        } else {
          inputs.push(op);
        }
        
        operators[randomNumber].click();

        for (let i = 0; i < length_2; i++) {
          const digit = digits[Math.floor(Math.random() * 10)];
  
          inputs.push(digit.innerText);
          digit.click();
        }

        cy.get('#equal').click();

        console.log(inputs);
        const result = Math.floor(eval(inputs.join('')));
        console.log(result);
        cy.get('#total').should('have.text', result);
      });      
    });
  });
});
