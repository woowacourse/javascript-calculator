import State from "./state.js";

const state = new State();

const digits = document.querySelectorAll(".digit");
const total = document.getElementById("total");

const isZero = (a) => a === "0";

function onDigitClick(event) {
  if (isZero(total.innerText)) {
    total.innerText = event.target.innerText;
    state.setState("currentValue", total.innerText);
  } else {
    total.innerText += event.target.innerText;
    state.setState("currentValue", total.innerText);
  }
}

digits.forEach((digit) => digit.addEventListener("click", onDigitClick));
