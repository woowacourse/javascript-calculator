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
    this.#$digits = document.querySelector('.digits');
    this.#$operations = document.querySelector('.operations');
    this.#$modifier = document.querySelector('.modifier');
  }

  #initEvent() {
    this.#$digits.addEventListener('click', this.#handleClickValue);
    this.#$operations.addEventListener('click', this.#handleClickOperations);
    this.#$modifier.addEventListener('click', () => {
      this.#model.resetFomula();
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
    this.#model.changeFomula(value);
  };

  #handleClickResult() {
    this.#model.calculate();
  }
}
