// number : Number 타입으로 생성한 숫자들
// digit : 계산기에 입력하거나 입력될 숫자들

const MIN_INPUT_NUMBER = 0;
const MAX_INPUT_NUMBER = 999;

function generateRandomNumber(minNumber = MIN_INPUT_NUMBER, maxNumber = MAX_INPUT_NUMBER) {
  const randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);

  return randomNumber;
}

function generateRandomNumberArray() {
  const numbers = [];

  for (let i = 0; i < 2; i++) {
    numbers.push(generateRandomNumber());
  }

  return numbers;
}

function calculate(number1, operator, number2) {
  let result = 0;

  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else if (operator === 'X') {
    result = number1 * number2;
  } else if (operator === '/') {
    if (number2 === 0) {
      result = 'NaN';
    } else {
      result = Math.floor(number1 / number2);
    }
  }

  return result;
}

function clickDigits(digits) {
  for (let i = 0; i < digits.length; i++) {
    cy.get('.digit').contains(digits[i]).click();
  }
}

function clickTestCase(digits1, operator, digits2) {
  clickDigits(digits1);
  cy.get('.operation').contains(operator).click();

  clickDigits(digits2);
  cy.get('.operation').contains('=').click();
}

function numbersToDigits(numbers) {
  return numbers.map((number) => String(number));
}

function testCalculate(operator) {
  const numbers = generateRandomNumberArray();
  const result = calculate(numbers[0], operator, numbers[1]);

  const digits = numbersToDigits(numbers);
  clickTestCase(digits[0], operator, digits[1]);

  cy.get('#total').should('have.text', `${result}`);
}

context('calculator', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5501/javascript-calculator/');
  });

  it('2개의 임의의 3자리 숫자를 입력받고 더한다', () => {
    testCalculate('+');
  });

  it('2개의 임의의 3자리 숫자를 입력받고 뺀다', () => {
    testCalculate('-');
  });

  it('2개의 임의의 3자리 숫자를 입력받고 곱한다', () => {
    testCalculate('X');
  });

  it('2개의 임의의 3자리 숫자를 입력받고 나눈다', () => {
    testCalculate('/');
  });

  it('숫자가 있는 상태에서 AC버튼을 누르면 0으로 초기화 한다.', () => {
    const randomDigits = String(generateRandomNumber());

    clickDigits(randomDigits);
    cy.get('.modifier').contains('AC').click();
    cy.get('#total').should('have.text', `0`);
  });

  it('숫자를 최대 3자리 수까지만 입력받는다.', () => {
    const randomDigits = String(generateRandomNumber(1000, 99999));

    clickDigits(randomDigits);
    cy.get('#total').should('have.text', `${randomDigits.slice(0, 3)}`);
    cy.get('.modifier').contains('AC').click();
  });

  it('나누기 결과에서 소수점 이하는 버림한다.', () => {
    const digit1 = '777';
    const digit2 = '3';
    const result = calculate(digit1, '/', digit2);

    clickTestCase(digit1, '/', digit2);
    cy.get('#total').should('have.text', `${result}`);
  });

  it('0으로 나눌 때 NaN으로 출력한다.', () => {
    const randomDigits = String(generateRandomNumber());
    const zero = '0';

    clickTestCase(randomDigits, '/', zero);
    cy.get('#total').should('have.text', 'NaN');
  });
});
