class CalculatorView {
  constructor(calculator) {
    this.calculator = calculator;
  }

  addNumber(num) {
    // 숫자값 받기
    // 유효성 검사
    // 통과시 string에 넣기
  }

  addOperator(operator) {
    // 연산자값 받기
    // 유효성 검사
    // 통과시 string에 넣기
  }

  handleNumber() {
    const digitBtns = document.querySelectorAll(".digit");
    digitBtns.forEach(digitBtn => {
      digitBtn.addEventListener("click", () => {
        this.addNumber(digitBtn.innerHTML);
      });
    });
  }

  handleOperator() {}
}

export default CalculatorView;
