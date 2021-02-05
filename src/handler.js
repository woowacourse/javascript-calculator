import CalculatorController from './calculator/CalculatorController.js';

export const operationHandler = (event) => {
  const $clicked = event.target;
  const inputValue = $clicked.innerText;
  if ($clicked.className !== 'operation') {
    return
  }
  if (inputValue === '=') {
    CalculatorController.calculate();
    return;
  }
  CalculatorController.put(inputValue);
}

export const digitHandler = (event) => {
  const $clicked = event.target;
  const inputValue = $clicked.innerText;
  if ($clicked.className !== 'digit') {
    return
  }
  CalculatorController.put(inputValue);
}

export const modifierHandler = (event) => {
  const $clicked = event.target;
  const inputValue = $clicked.innerText;
  if ($clicked.className !== 'modifier') {
    return
  }
  CalculatorController.clearTotalBox();
}

export default {
  operationHandler,
  digitHandler,
  modifierHandler
};
