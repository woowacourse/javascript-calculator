import State from "./state.js";

const state = new State();

const digits = document.querySelectorAll(".digit");
const total = document.getElementById("total");

const isStringZero = (a) => a === "0";
const isThree = (a) => a === 3;

function onDigitClick(event) {
  if (isThree(state.currentValue.length)) return;

  if (isStringZero(total.innerText)) {
    total.innerText = event.target.innerText;
    state.setState("currentValue", total.innerText);
  } else {
    total.innerText += event.target.innerText;
    state.setState("currentValue", total.innerText);
  }
}

digits.forEach((digit) => digit.addEventListener("click", onDigitClick));
