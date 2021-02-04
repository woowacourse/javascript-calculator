const calculator = document.querySelector('.calculator');
const total = document.querySelector('#total');
let firstOperand;
let secondOperand;
let operator;
let isClickedOperator = false;

calculator.addEventListener('click', (e) => {
  const { className } = e.target;

  if (className === 'modifier') {
    firstOperand = 0;
    secondOperand = 0;
    operator = '';
    isClickedOperator = false;

    total.innerText = 0;
    document
      .querySelector('.clicked-operation')
      ?.classList.remove('clicked-operation');

    return;
  }

  if (className === 'digit') {
    if (isClickedOperator) {
      firstOperand = Number(total.innerText);
      isClickedOperator = false;
      total.innerText = '';

      document
        .querySelector('.clicked-operation')
        ?.classList.remove('clicked-operation');
    }

    if (total.innerText.length === 3) {
      alert('3자리 이하의 숫자를 입력해주세요.');
      return;
    }

    const clickedDigit = Number(e.target.innerText);
    const displayedValue = Number(total.innerText) * 10 + clickedDigit;
    total.innerText = displayedValue;
    console.log(displayedValue);
  }

  if (className === 'operation') {
    document
      .querySelector('.clicked-operation')
      ?.classList.remove('clicked-operation');
    e.target.classList.add('clicked-operation');

    const clickedOperator = e.target.innerText;

    if (clickedOperator === '=') {
      secondOperand = Number(total.innerText);

      let displayedValue;
      if (operator === '+') {
        displayedValue = firstOperand + secondOperand;
      } else if (operator === '-') {
        displayedValue = firstOperand - secondOperand;
      } else if (operator === 'X') {
        displayedValue = firstOperand * secondOperand;
      } else if (operator === '/') {
        displayedValue = Math.floor(firstOperand / secondOperand);
      }
      total.innerText = displayedValue;
    } else {
      operator = clickedOperator;
      isClickedOperator = true;
    }
  }
});
