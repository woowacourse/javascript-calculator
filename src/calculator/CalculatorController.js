import { totalBox } from '../store.js';
import { INFINITE, INVALID_EXPRESSION } from '../contants.js';
import CalculatorView from './CalculatorView.js';
import Input from './Input.js';

export default class CalculatorController {
  static appendValue(inputValue) {
    if (!Input.isInputValueValid(inputValue)) {
      return;
    }
    if (totalBox.getLatestOperand() === '0') {
      totalBox.value = totalBox.value.slice(0, -1);
    }
    totalBox.value = totalBox.value + inputValue;
  }

  static isExpressionValid(rightOperand, operator) {
    if (
      rightOperand === '' ||
      rightOperand === undefined ||
      operator === undefined
    ) {
      alert(INVALID_EXPRESSION);
      return false;
    }

    return true;
  }

  static getCalculatedValue() {
    const [leftOperand, rightOperand] = totalBox.getOperands();
    const [operator] = totalBox.getOperators();
    let result;

    if (!CalculatorController.isExpressionValid(rightOperand, operator)) return;
    
    switch (operator) {
      case '+':
        result = Number(leftOperand) + Number(rightOperand);
        break;
      case '-':
        result = Number(leftOperand) - Number(rightOperand);
        break;
      case 'X':
        result = Number(leftOperand) * Number(rightOperand);
        break;
      case '/':
        result = Number(leftOperand) / Number(rightOperand);
        if(isFinite(result)) {
          result = Math.floor(result);
        }
        break;
      default:
        break;
    }

    return String(result);
  }

  static clearTotalBox() {
    totalBox.value = '';
    CalculatorView.render('0');
  }

  static put(inputValue) {
    const prevTotalBoxValue = totalBox.value;
    CalculatorController.appendValue(inputValue);
    if (totalBox.value === prevTotalBoxValue) return;
    CalculatorView.render(totalBox.value);
  }

  static calculate() {
    const calculatedValue = CalculatorController.getCalculatedValue(
      totalBox.value
    );
    if (calculatedValue) {
      if (!isFinite(calculatedValue)) {
        totalBox.value = '';
        CalculatorView.render(INFINITE);
        return;
      }
      totalBox.value = calculatedValue;
      CalculatorView.render(calculatedValue);
    }
  }
}
