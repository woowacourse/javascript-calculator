import { totalBox } from './store.js';
import Input from './Input.js';

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
}
