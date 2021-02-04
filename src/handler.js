import { INFINITE } from './contants.js';
import { totalBox } from './store.js';
import Controller from './Controller.js';
import View from './View.js';

export const clickHandler = (event) => {
  const $click = event.target;
  const inputValue = $click.innerText;

  switch ($click.className) {
    case 'operation':
      if (inputValue === '=') {
        const calculatedValue = Controller.getCalculatedValue(totalBox.value);
        if (!isFinite(calculatedValue)) {
          // clear value
          View.render(INFINITE);
        }
        totalBox.value = calculatedValue;
        View.render(calculatedValue);
      } else {
        Controller.appendValue(inputValue);
        View.render(totalBox.value);
      }

      break;

    case 'digit':
      Controller.appendValue(inputValue);
      View.render(totalBox.value);
      break;

    case 'modifier':
      break;

    default:
      break;
  }
};

export default {
  clickHandler,
};
