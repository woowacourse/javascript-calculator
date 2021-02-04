let firstNumber = '0';
let operator = '';
let secondNumber = '0';
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
    secondNumber = '0';
    result = '0';
  }

  const isValidLength = (num) => {
    if (num.charAt(0) === '-') {
      if (num.length - 1 < 3) return true;
    } else {
      if (num.length < 3) return true;
    }
    return false;
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
          if (isValidLength(firstNumber)) {
            firstNumber += e.target.innerText;
          }
        }
        console.log(firstNumber);
        resultArea.innerText = firstNumber;
      } else { // secondNumber
        if (isValidLength(secondNumber)) {
          if (secondNumber === '0') {
            secondNumber = e.target.innerText;
          } else {
            secondNumber += e.target.innerText;
            resultArea.innerText = secondNumber;
          }
          console.log(secondNumber);
        }
      }

    })
  })

  const calculateResult = () => {
    if (operator === '+') {
      result = parseInt(firstNumber) + parseInt(secondNumber);
    } else if (operator === '-') {
      result = parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operator === 'X') {
      result = parseInt(firstNumber) * parseInt(secondNumber);
    } else if (operator === '/') {
      result = parseInt(firstNumber) / parseInt(secondNumber);
    } else if (operator === '') {
      result = parseInt(firstNumber);
    }

    console.log(result);
    resultArea.innerText = `${result}`;
  }

  operatorElements.forEach((operatorElement, index) => {
    if (index === 4) {
      operatorElement.addEventListener('click', calculateResult);
    } else {
      operatorElement.addEventListener('click', (e) => {
        if ((firstNumber === '-' || firstNumber === '0') && e.target.innerText === '-') {
          firstNumber = '-';
        } else {
          if (firstNumber !== '0') {
            operator = e.target.innerText;
            console.log(operator);
          }
        }
      });
    }
  })
};

init();

