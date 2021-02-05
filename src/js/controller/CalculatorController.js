export default class CalculatorController {
  #model;
  #$digits;
  #$operations;

  constructor(model) {
    this.#model = model;
    this.#initDOMElement();
    this.#initEvent();
  }

  #initDOMElement() {
    this.#$digits = document.querySelector('.digits');
    this.#$operations = document.querySelector('.operations');
  }

  #initEvent() {
    this.#$digits.addEventListener('click', this.#handleClickValue);
    this.#$operations.addEventListener('click', event => {
      if (event.target.innerText !== '=') this.#handleClickValue(event);
    });
  }

  #handleClickValue = ({ target }) => {
    const value = target.innerText;
    this.#model.appendFomula(value);
  };
}
