export default class Calculator {
  #firstNumber = 0;
  #secondNumber = 0;
  #operator = ""; // 빈 문자열 값 상수 처리

  init() {
    this.#firstNumber = 0;
    this.#secondNumber = 0;
    this.#operator = "";
  }

  #add() {
    return this.#firstNumber + this.#secondNumber;
  }

  #sub() {
    return this.#firstNumber - this.#secondNumber;
  }

  #divide() {
    return Math.floor(this.#firstNumber / this.#secondNumber);
  }

  #multiple() {
    return this.#firstNumber * this.#secondNumber;
  }

  #vaildateNumber(before, number) {
    if (before.toString().length === 3) {
      return before;
    }

    return Number(before) * 10 + Number(number);
  }

  setNumbers(number) {
    switch (this.#operator) {
      case "":
        this.#firstNumber = this.#vaildateNumber(this.#firstNumber, number);
        break;

      default:
        this.#secondNumber = this.#vaildateNumber(this.#secondNumber, number);
        break;
    }

    return this;
  }

  setOperator(operator) {
    if (this.#operator !== "") {
      return false;
    }

    this.#operator = operator;
    return this;
  }

  get state() {
    let output = "";
    output += this.#firstNumber > 0 ? this.#firstNumber : "";
    output += this.#operator ? this.#operator : "";
    output += this.#secondNumber > 0 ? this.#secondNumber : "";

    return output;
  }

  get result() {
    switch (this.#operator) {
      case "+":
        return this.#add();
      case "-":
        return this.#sub();
      case "X":
        return this.#multiple();
      case "/":
        return this.#divide();
      default:
        throw new Error("존재하지 않는 연산자입니다.");
    }
  }
}
