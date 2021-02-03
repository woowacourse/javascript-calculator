const digits = document.getElementsByClassName('digit');
const operators = document.getElementsByClassName('operator');
const display = document.getElementById('total');
const equal = document.getElementById('equal');
const clear = document.querySelector('.modifier');
let numLenChecker = 0;

for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', () => printDigit(digits[i].innerHTML));
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () =>
    printOperator(operators[i].innerHTML),
  );
}

equal.addEventListener('click', () => calculate());
clear.addEventListener('click', printAC);

function printDigit(digit) {
  if (numLenChecker === 3) {
    alert('숫자는 3자리까지만 입력이 가능합니다.');
    return;
  }
  numLenChecker++;
  if (display.innerHTML === '0') {
    display.innerHTML = digit;
  } else {
    display.innerHTML += digit;
  }
}

function printOperator(operator) {
  numLenChecker = 0;
  display.innerHTML += operator;
}

function calculate() {
  const currInput = display.innerHTML;
  const pattern = /[+-/X]/g;
  const operator = currInput.match(pattern)[0];
  const digits = currInput.split(operator);
  const digit1 = parseInt(digits[0]);
  const digit2 = parseInt(digits[1]);

  if (operator) {
    printResult(digit1, digit2, operator);
  }
}

function printResult(digit1, digit2, operator) {
  let result;
  if (operator === '+') {
    result = digit1 + digit2;
  } else if (operator === '-') {
    result = digit1 - digit2;
  } else if (operator === '/') {
    result = Math.floor(digit1 / digit2);
  } else if (operator === 'X') {
    result = digit1 * digit2;
  }

  display.innerHTML = result;
}

function printAC() {
  const result = '0';
  numLenChecker = 0;
  display.innerHTML = result;
}
