const calculator = document.querySelector('.calculator');
const total = document.querySelector('#total');
let firstOperand;
let secondOperand;
let operator;
let isClickedOperator = false;

calculator.addEventListener('click', (e) => {
  const { className } = e.target;

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
    const clickedOperator = e.target.innerText;

    if (clickedOperator === '=') {
    } else {
      document
        .querySelector('.clicked-operation')
        ?.classList.remove('clicked-operation');

      e.target.classList.add('clicked-operation');

      operator = clickedOperator;
      isClickedOperator = true;
    }
  }
});
