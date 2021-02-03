const calculator = document.querySelector('.calculator');
const total = document.querySelector('#total');
let firstOperand;
let secondOperand;
let operator;

calculator.addEventListener('click', (e) => {
  const { className } = e.target;

  if (className === 'digit') {
    if (total.innerText.length === 3) {
      alert('3자리 이하의 숫자를 입력해주세요.');
      return;
    }

    const clickedDigit = Number(e.target.innerText);
    const displayedValue = Number(total.innerText) * 10 + clickedDigit;
    total.innerText = displayedValue;
    console.log(displayedValue);
  } else if (className === 'operation') {
    const clickedOperator = e.target.innerText;

    // TODO: 연산자가 입력된 경우의 처리 필요
    if (operator === '=') {
      //
    } else if (operator === '+') {
      //
    }
  }
});
