import { totalBox } from './store.js';
import Controller from './Controller.js';
import View from './View.js';

export const clickHandler = (event) => {
  const $click = event.target;
  const inputValue = $click.innerText;

  switch ($click.className) {
    case 'operation':
      if (inputValue === '=') {
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
