import { totalBox } from './store.js';
import Input from './Input.js';
import Calculator from './Calculator.js';

export default class Controller {
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
}
