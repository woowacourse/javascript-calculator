import { OPERATORS, MAXIMUM_DIGITS_LENGTH } from './utils/constant.js';

export default function Calculator() {
  const $total = document.querySelector('#total');
  const $digits = document.querySelector('.digits');
  const $operations = document.querySelector('.operations');
  const $equalSign = document.querySelector('#equal-sign');
  const $modifier = document.querySelector('.modifier');

  const isValidLength = () => {
    const displayValue = $total.innerText;
    const operator = displayValue.split('').find((v) => OPERATORS.includes(v));

    if (!operator) {
      return displayValue.length < MAXIMUM_DIGITS_LENGTH;
    }
    return displayValue.split(operator)[1].length < MAXIMUM_DIGITS_LENGTH;
  };

  const isAbleAddOperator = () => {
    const displayValue = $total.innerText;
    if ($total.innerText === '0') {
      return false;
    }
    return !Number.isNaN(Number(displayValue[displayValue.length - 1]));
  };

  const putNumber = ({ target }) => {
    if (!isValidLength()) {
      return alert('숫자는 세 자리까지만 입력 가능합니다!');
    }
    if ($total.innerText === '0') {
      return ($total.innerText = target.innerText);
    }
    return ($total.innerText += target.innerText);
  };

  const putOperator = ({ target }) => {
    if (target.innerText === '=') {
      return;
    }

    if (!isAbleAddOperator()) {
      alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
      return;
    }
    $total.innerText += target.innerText;
  };

  const putResult = () => {
    const displayValue = $total.innerText;
    const operator = displayValue.split('').find((v) => OPERATORS.includes(v));
    const operands = displayValue.split(operator);
    const operations = {
      '+': (a, b) => Number(a) + Number(b),
      '-': (a, b) => Number(a) - Number(b),
      X: (a, b) => Number(a) * Number(b),
      '/': (a, b) => Math.floor(Number(a) / Number(b)),
    };
    if (operands.length === 1) {
      return;
    }
    $total.innerText = operations[operator](
      Number(operands[0]),
      Number(operands[1]),
    );
  };

  const clearDisplay = () => {
    $total.innerText = '0';
  };

  $digits.addEventListener('click', putNumber);
  $operations.addEventListener('click', putOperator);
  $equalSign.addEventListener('click', putResult);
  $modifier.addEventListener('click', clearDisplay);
}

window.onload = () => {
  new Calculator();
};
