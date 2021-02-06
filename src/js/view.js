class CalculatorView {
  showResult(operator) {
    const resultInput = document.querySelector("#total");
    resultInput.innerHTML = operator;
  }
}

export default CalculatorView;
