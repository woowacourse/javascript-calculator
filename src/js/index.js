import { $ } from '../utils/common.js';

class Calculator {
  constructor() {
    this.configureButton();
    this.$totalNumber = $('#total');
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operator = '=';
  }

  configureButton() {
    const $digitButtons = $('.digits');
    const $modifierButton = $('.modifier');
    const $operationButtons = $('.operations');
    $digitButtons.addEventListener('click', this.clickNumberButton);
    $modifierButton.addEventListener('click', this.clickModifierButton);
    $operationButtons.addEventListener('click', this.clickOperationButton);
  }

  clickNumberButton = (e) => {
    console.log(e.target.innerText);
    if (this.operator === '=') {
      this.firstNumber += e.target.innerText;
      this.$totalNumber.innerText = this.firstNumber;
      return;
    }
    this.secondNumber = e.target.innerText;
    this.$totalNumber.innerText += this.secondNumber;
  };

  clickOperationButton = (e) => {
    if (e.target.innerText === '=') {
      // 결과를 계산
      const result = this.calculate(
        Number(this.firstNumber),
        Number(this.secondNumber),
        this.operator,
      );
      this.$totalNumber.innerText = result;
      this.operator = e.target.innerText;
      this.nextCalculate(result);
      return;
    }
    this.operator = e.target.innerText;
    this.$totalNumber.innerText += this.operator;
  };

  // 숫자 누를때마다 바로 결과값으로 보이게.

  calculate(firstNumber, secondNumber, operator) {
    console.log('firstNumber', firstNumber);
    console.log('secondNumber', secondNumber);
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case 'X':
        return firstNumber * secondNumber;
      case '/':
        return firstNumber / secondNumber;
      default:
        // 예외 처리
        return 0;
    }
  }
}

const calculator = new Calculator();
