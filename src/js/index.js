const acElement = document.querySelector(".modifier");
const operatorElements = document.querySelectorAll('.operation');
const digitElements = document.querySelectorAll('.digit')
const resultAreaElement = document.getElementById('total');

const firstNumber = { value: '0', isEntered: false };
const operator = { value: '+', isEntered: false };
const secondNumber = { value: '0', isEntered: false };
let result = '0';

const clear = () => {
  firstNumber.isEntered = secondNumber.isEntered = operator.isEntered = false;
  firstNumber.value = secondNumber.value = '0';
  operator.value = '+';
  result = '0';
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
  if (operator === '+')
    return parseInt(firstNumber) + parseInt(secondNumber);
  if (operator === '-')
    return parseInt(firstNumber) - parseInt(secondNumber);
  if (operator === 'X')
    return parseInt(firstNumber) * parseInt(secondNumber);
  if (operator === '/')
    return parseInt(firstNumber) / parseInt(secondNumber);
}

// 숫자 버튼 클릭 시
const digitCallback = (e) => {
  // operator가 입력되지 않은 상태 => firstNumber 입력
  // firstNumber가 입력되지 않은 상태 && 0~9숫자입력 또는 -이면 firstNumber에 입력

  // firstNumber가 입력된 상태 && 0~9 숫자 입력 && 길이가 3미만이면 firstNumber에 이어 붙이기
  // firstNumber가 0이면 덮어쓰기

  // operator가 입력된 상태 => secondNumber 입력
  // secondNumber가 입력되지 않았으면 덮어쓰기
  // secondNumber가 0이면 덮어쓰기
  // secondNumber가 입력되어 있고 길이가 3미만이면 이어 붙이기
}

// 연산자 버튼 클릭 시
const operatorCallback = (e) => {
  // 
}

const init = () => {
  acElement.addEventListener("click", clear);

  digitElements.forEach(digit => {
    digit.addEventListener('click', digitCallback);
  });

  operatorElements.forEach((operatorElement) => {
    operatorElement.addEventListener('click', operatorCallback);
  });
};


init();