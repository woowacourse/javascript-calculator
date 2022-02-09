import { $ } from './utils/dom.js';

export default function eventHandler(calculator) {
  $('.digits').addEventListener('click', (event) => {
    if (calculator.total !== '') {
      calculator.reset();
    }
    if (calculator.operand === '') {
      calculator.setFirstNumber(event.target.innerText);
      calculator.render();
    }
    if (calculator.operand !== '') {
      calculator.setSecondNumber(event.target.innerText);
      calculator.render();
    }
  });
  $('.operations').addEventListener('click', (event) => {
    if (event.target.innerText !== '=') {
      calculator.setOperand(event.target.innerText);
      calculator.render();
      return;
    }
    calculator.calculate();
    calculator.renderTotal();
  });
  $('.modifiers').addEventListener('click', (event) => {
    calculator.reset();
  });
}