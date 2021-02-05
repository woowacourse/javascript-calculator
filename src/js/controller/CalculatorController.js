export default class CalculatorController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initEvent();
  }

  initEvent() {}
}
