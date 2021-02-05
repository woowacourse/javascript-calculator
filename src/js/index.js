const acElement = document.querySelector(".modifier");
const operatorElements = document.querySelectorAll('.operation');
const digitElements = document.querySelectorAll('.digit')
const resultAreaElement = document.getElementById('total');

const firstNumber = { value: '0', isEntered: false };
const operator = { value: '+', isEntered: false };
const secondNumber = { value: '0', isEntered: false };

const clear = () => {
  firstNumber.isEntered = secondNumber.isEntered = operator.isEntered = false;
  firstNumber.value = secondNumber.value = '0';
  operator.value = '+';
  displayResult(firstNumber.value);
}

const isValidLength = (num) => {
  if (num.charAt(0) === '-') {
    if (num.length - 1 < 3) return true;
  } else {
    if (num.length < 3) return true;
  }
  return false;
}

const displayResult = (num) => resultAreaElement.innerText = num;

const calculateResult = () => {
  if (operator.value === '+')
    return parseInt(firstNumber.value) + parseInt(secondNumber.value);
  if (operator.value === '-')
    return parseInt(firstNumber.value) - parseInt(secondNumber.value);
  if (operator.value === 'X')
    return parseInt(firstNumber.value) * parseInt(secondNumber.value);
  if (operator.value === '/')
    return parseInt(parseInt(firstNumber.value) / parseInt(secondNumber.value));
}

function handleFirstNumber(chr) {
  if (!firstNumber.isEntered && (('0' <= chr && chr <= '9') || chr === '-')) {
    firstNumber.value = chr;
    firstNumber.isEntered = true;
    displayResult(firstNumber.value);
    return;
  }
  if (('0' <= chr && chr <= '9') && isValidLength(firstNumber.value)) {
    if (firstNumber.value === '0' || (firstNumber.value === '-' && chr === '0')) {
      firstNumber.value = chr;
      displayResult(firstNumber.value);
      return;
    }
    firstNumber.value += chr;
    displayResult(firstNumber.value);
  }
}

function handleSecondNumber(chr) {
  if (!secondNumber.isEntered || secondNumber.value === '0') {
    secondNumber.value = chr;
    secondNumber.isEntered = true;
    displayResult(secondNumber.value);
    return;
  }
  if (isValidLength(secondNumber.value)) {
    secondNumber.value += chr;
    displayResult(secondNumber.value);
  }
}

const handleDigitElement = (e) => {
  const chr = e.target.innerText;
  if (!operator.isEntered) {
    handleFirstNumber(chr);
    return;
  }
  handleSecondNumber(chr);
}

const substituteSecondNumberToFirstNumber = (chr, result) => {
  firstNumber.value = result;
  operator.value = chr;
  secondNumber.value = '0';
  secondNumber.isEntered = false;
}

const handleOperatorElement = (e) => {
  const chr = e.target.innerText;
  if (!firstNumber.isEntered) {
    handleFirstNumber(chr);
    return;
  }
  if (secondNumber.isEntered) {
    const result = calculateResult();
    displayResult(result);
    substituteSecondNumberToFirstNumber(chr, result);
    return;
  }
  if (chr !== '=' && firstNumber.value !== '-') {
    operator.value = chr;
    operator.isEntered = true;
  }
}

const init = () => {
  acElement.addEventListener("click", clear);
  digitElements.forEach(digit => {
    digit.addEventListener('click', handleDigitElement);
  });
  operatorElements.forEach((operatorElement) => {
    operatorElement.addEventListener('click', handleOperatorElement);
  });
};

init();