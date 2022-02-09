import { $ } from './utils/dom.js';

function digitEventHandler(calculator) {
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
}

function operationEventHandler(calculator) {
  $('.operations').addEventListener('click', (event) => {
    if (event.target.innerText !== '=') {
      calculator.setOperand(event.target.innerText);
      calculator.render();
      return;
    }
    calculator.calculate();
    calculator.renderTotal();
  });
}

function modifierEventHandler(calculator) {
  $('.modifiers').addEventListener('click', (event) => {
    calculator.reset();
  });
}

export default function eventHandler(calculator) {
  digitEventHandler(calculator);
  operationEventHandler(calculator);
  modifierEventHandler(calculator);
}