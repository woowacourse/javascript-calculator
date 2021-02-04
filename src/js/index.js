import Calculator from "./controller.js";
import CalculatorView from "./view.js";

const init = () => {
  const calculator = new Calculator();
  new CalculatorView(calculator);
};

init();
