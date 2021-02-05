import { digitHandler, modifierHandler, operationHandler } from './handler.js';

const $digits = document.querySelector('.digits');
const $operations = document.querySelector('.operations');
const $modifiers = document.querySelector('.modifiers');

export const addCalculatorEventListeners = () => {
  $digits.addEventListener('click', digitHandler)
  $operations.addEventListener('click', operationHandler)
  $modifiers.addEventListener('click', modifierHandler)
}

export default {
  addCalculatorEventListeners
}