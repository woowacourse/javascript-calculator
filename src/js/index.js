const OPERATORS = ['/', '*', '-', '+'];
const LEN_LIMIT = 3;
const $total = document.querySelector('#total');
const $digits = document.querySelector('.digits');
const $operations = document.querySelector('.operations');

const isValidLength = () => {
  const displayValue = $total.innerText;
  const operator = displayValue.split('').find((v) => OPERATORS.includes(v));

  if (!operator) {
    return displayValue.length < LEN_LIMIT;
  }
  return displayValue.split(operator)[1].length < LEN_LIMIT;
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
  return ($total.innerText += target.innerText);
};

$digits.addEventListener('click', putNumber);
$operations.addEventListener('click', putOperator);
