export default class CalculatorModel {
  #firstOperand;
  #SecondOperand;
  #operator;
  #fomula;
  #view;

  constructor(view) {
    this.#fomula = '0';
    this.#view = view;
  }

  calculate(formula) {
    try {
      //operator 받아들이는 함수
      //operand 받아들이는 함수
    } catch (error) {
      //에러 처리
    }
    //결과값 리턴
    this.#view.render();
  }

  get fomula() {
    return this.#fomula;
  }

  appendFomula(value) {
    this.#fomula += value;
    this.#view.renderTotal();
  }
}
