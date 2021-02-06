import { CLASS } from '../library/constants/attribute.js';

export default class CalculatorController {
  #model;
  #$digits;
  #$operations;
  #$modifier;

  constructor(model) {
    this.#model = model;
    this.#initDOMElement();
    this.#initEvent();
  }

  #initDOMElement() {
    this.#$digits = document.querySelector(`.${CLASS.DIGITS}`);
    this.#$operations = document.querySelector(`.${CLASS.OPERATIONS}`);
    this.#$modifier = document.querySelector(`.${CLASS.MODIFIER}`);
  }

  #initEvent() {
    this.#$digits.addEventListener('click', this.#handleClickValue);
    this.#$operations.addEventListener('click', this.#handleClickOperations);
    this.#$modifier.addEventListener('click', () => {
      this.#model.resetFormula();
    });
  }

  #handleClickOperations = event => {
    if (event.target.innerText !== '=') {
      this.#handleClickValue(event);
    } else {
      this.#handleClickResult();
    }
  };

  #handleClickValue = ({ target }) => {
    const value = target.innerText;
    this.#model.changeFormula(value);
  };

  #handleClickResult() {
    this.#model.calculate();
  }
}
