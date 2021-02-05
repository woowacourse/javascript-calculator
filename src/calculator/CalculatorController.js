import { totalBox } from '../store.js';
import { INFINITE } from '../contants.js';
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

  static getCalculatedValue(totalValue) {
    const expression = totalValue.replace('X', '*');

    return Math.floor(eval(expression));
  }

  static clearTotalBox() {
    totalBox.value = '';
    CalculatorView.render('0');
  }

  static put(inputValue) {
    CalculatorController.appendValue(inputValue);
    CalculatorView.render(totalBox.value);
  }
  
  static calculate() {
    const calculatedValue = CalculatorController.getCalculatedValue(totalBox.value);
    if (!isFinite(calculatedValue)) {
      totalBox.value = '';      
      CalculatorView.render(INFINITE);
      return;
    }
    totalBox.value = calculatedValue;
    CalculatorView.render(calculatedValue);
  }

}
