let firstNumber = '0';
let operator = '';
let secondNumber = '';
let result = '0';

const init = () => {
  const AC = document.querySelector(".modifier");
  const operatorElements = document.querySelectorAll('.operation');
  const digits = document.querySelectorAll('.digit')
  const resultArea = document.getElementById('total');

  const clear = () => {
    resultArea.innerText = '0';
    firstNumber = '0';
    operator = '';
    secondNumber = '';
    result = '0';
  }

  AC.addEventListener("click", clear);

  digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
      // console.log(e.target.innerText);
      // firstNumber
      if (!operator) {
        if (firstNumber.charAt(0) === '0') {
          firstNumber = e.target.innerText;
        } else {
          if (firstNumber.length < 3) {
            firstNumber += e.target.innerText;
          }
        }
        console.log(firstNumber);
        resultArea.innerText = firstNumber;
      } else { // secondNumber
        if (secondNumber.length < 3) {
          secondNumber += e.target.innerText;
          console.log(secondNumber);
          resultArea.innerText = secondNumber;
        }
      }

    })
  })

  operatorElements.forEach((operatorElement, index) => {
    if (index === 4) {
      operatorElement.addEventListener('click', (e) => {
        if (operator === '+') {
          result = parseInt(firstNumber) + parseInt(secondNumber);
        } else if (operator === '-') {
          result = parseInt(firstNumber) - parseInt(secondNumber);
        } else if (operator === 'X') {
          result = parseInt(firstNumber) * parseInt(secondNumber);
        } else if (operator === '/') {
          result = parseInt(firstNumber) / parseInt(secondNumber);
        }

        console.log(result);
        resultArea.innerText = `${result}`;
      });
    } else {
      operatorElement.addEventListener('click', (e) => {
        operator = e.target.innerText;
        console.log(operator);
      });
    }
  })
};

init();

