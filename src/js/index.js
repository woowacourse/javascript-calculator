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
  displayResult('0');
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
    return parseInt(firstNumber.value) / parseInt(secondNumber.value);
}

function handleFirstNumber(chr) {
  // 첫 번쨰 입력
  // firstNumber가 입력되지 않은 상태 && (0~9숫자입력 또는 -이면) firstNumber에 입력
  if (!firstNumber.isEntered && (('0' <= chr && chr <= '9') || chr === '-')) {
    firstNumber.value = chr;
    firstNumber.isEntered = true;
    displayResult(firstNumber.value);
    console.log(firstNumber.value, operator.value, secondNumber.value);
    return;
  }

  // 두 번째 입력
  // firstNumber가 입력된 상태 && 0~9 숫자 입력 && 길이가 3미만이면 firstNumber에 이어 붙이기
  if (firstNumber.isEntered && ('0' <= chr && chr <= '9') && isValidLength(firstNumber.value)) {
    // firstNumber가 0이거나 (firstNumber가 -이고 chr가 0인경우 덮어쓰기)
    if (firstNumber.value === '0' || (firstNumber.value === '-' && chr === '0')) {
      firstNumber.value = chr;
      displayResult(firstNumber.value);
      console.log(firstNumber.value, operator.value, secondNumber.value);
      return;
    }

    firstNumber.value += chr;
    displayResult(firstNumber.value);
    console.log(firstNumber.value, operator.value, secondNumber.value);
  }
}

function handleSecondNumber(chr) {
  // secondNumber가 입력되지 않았으면 덮어쓰기
  if (!secondNumber.isEntered) {
    secondNumber.value = chr;
    secondNumber.isEntered = true;
    displayResult(secondNumber.value);
    console.log(firstNumber.value, operator.value, secondNumber.value);
    return;
  }
  // secondNumber가 0이면 덮어쓰기
  if (secondNumber.value === '0') {
    secondNumber.value = chr;
    displayResult(secondNumber.value);
    console.log(firstNumber.value, operator.value, secondNumber.value);
    return;
  }
  // secondNumber가 입력되어 있고 길이가 3미만이면 이어 붙이기
  if (isValidLength(secondNumber.value)) {
    secondNumber.value += chr;
    displayResult(secondNumber.value);
    console.log(firstNumber.value, operator.value, secondNumber.value);
  }
}

// 숫자 버튼 클릭 시
function handleDigitElement(e) {
  const chr = e.target.innerText;
  // operator가 입력되지 않은 상태 => firstNumber 입력
  if (!operator.isEntered) {
    handleFirstNumber(chr);
    return;
  }
  // operator가 입력된 상태 => secondNumber 입력
  handleSecondNumber(chr);
}

// 연산자 버튼 클릭 시
const handleOperatorElement = (e) => {
  const chr = e.target.innerText;

  // firstNumber가 입력안되어 있으면 firstNumber입력
  if (!firstNumber.isEntered) {
    handleFirstNumber(chr);
    return;
  }

  // secondNumber가 입력되어 있으면 = 역할
  if (secondNumber.isEntered) {
    const result = calculateResult();
    displayResult(result);
    firstNumber.value = result;
    operator.value = chr;
    secondNumber.value = '0';
    secondNumber.isEntered = false;
    return;
  }

  if (chr !== '=' && firstNumber.value !== '-') {
    operator.value = chr;
    operator.isEntered = true;
    console.log(firstNumber.value, operator.value, secondNumber.value);
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