import State from "./state.js";

const state = new State();

const digits = document.querySelectorAll(".digit");
const total = document.getElementById("total");

const isStringZero = (a) => a === "0";
const isThree = (a) => a === 3;

const onDigitClick = (event) => {
  if (isThree(state.currentValue.length)) return;

  if (isStringZero(total.innerText)) {
    total.innerText = event.target.innerText;
    state.setState("currentValue", total.innerText);
  } else {
    total.innerText += event.target.innerText;
    state.setState("currentValue", total.innerText);
  }
};

digits.forEach((digit) => digit.addEventListener("click", onDigitClick));

const onOperatorClick = (event) => {
  // if(event.target.innerText ==='=') {}
  switch (event.target.innerText) {
    case "/": {
      state.setState("operator", "divide");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      break;
    }
    case "X": {
      state.setState("operator", "multiple");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      break;
    }
    case "+": {
      state.setState("operator", "increase");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      break;
    }
    case "-": {
      state.setState("operator", "decrease");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      break;
    }
  }
};
