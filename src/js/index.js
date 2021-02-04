const calculator = document.querySelector('.calculator');
const total = document.querySelector('#total');
let firstOperand = null;
let secondOperand = null;
let operator = '';
let isClickedOperator = false;

calculator.addEventListener('click', (e) => {
  const { className } = e.target;

  if (className === 'modifier') {
    firstOperand = null;
    secondOperand = null;
    operator = '';
    isClickedOperator = false;
    total.innerText = 0;

    document
      .querySelector('.clicked-operation')
      ?.classList.remove('clicked-operation');

    return;
  }

  if (secondOperand !== null) {
    alert('AC를 눌러 초기화를 해주세요.');

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
  }

  if (className === 'operation') {
    const clickedOperator = e.target.innerText;

    if (clickedOperator === '=') {
      if (operator === '') {
        alert('연산자를 선택해주세요.');

        return;
      }

      if (isClickedOperator) {
        alert('두번째 숫자를 입력해주세요.');

        return;
      }

      document
        .querySelector('.clicked-operation')
        ?.classList.remove('clicked-operation');

      e.target.classList.add('clicked-operation');

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

      return;
    }

    document
      .querySelector('.clicked-operation')
      ?.classList.remove('clicked-operation');

    if (firstOperand !== null) {
      alert('2개의 숫자에 대한 계산만 가능합니다.');

      return;
    }

    operator = clickedOperator;
    isClickedOperator = true;
    e.target.classList.add('clicked-operation');
  }
});
