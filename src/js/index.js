const digits = document.getElementsByClassName('digit');
const operators = document.getElementsByClassName('operator');
const display = document.getElementById('total');
const equal = document.getElementById('equal');

for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', () => printDigit(digits[i].innerHTML));
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () =>
    printOperator(operators[i].innerHTML),
  );
}

equal.addEventListener('click', () => printResult());

function printDigit(digit) {
  if (display.innerHTML === '0') {
    display.innerHTML = digit;
  } else {
    display.innerHTML += digit;
  }
}

function printOperator(operator) {
  display.innerHTML += operator;
}

function printResult() {
  const currInput = display.innerHTML;
  if (currInput.includes('+')) {
    const digit1 = parseInt(currInput.slice(0, currInput.indexOf('+')));
    const digit2 = parseInt(currInput.slice(currInput.indexOf('+') + 1));
    printAdd(digit1, digit2);
  }
}

function printAdd(digit1, digit2) {
  const result = digit1 + digit2;
  display.innerHTML = result;
}
