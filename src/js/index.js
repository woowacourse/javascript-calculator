const state = {
  input: "",
  operation: "",
  result: "",
};

function checkInputLength(input) {
  let checkLength = false;

  if (input.length < 3) {
    checkLength = true;
  }

  return checkLength;
}

function isRightInput(input) {
  let rightInput = false;

  if (input[0] !== "0") {
    rightInput = true;
  }

  return rightInput;
}

function onClickedDigit() {
  const digits = document.getElementsByClassName("digit");
  let input = "";

  for (let digit of digits) {
    digit.addEventListener("click", () => {
      const total = document.getElementById("total");

      if (isRightInput(input) && checkInputLength(input)) {
        input += digit.innerText;
      } else if (!isRightInput(input)) {
        input = digit.innerText;
      }
      total.innerText = input;
      state.input = input;
    });
  }
}

function addOperation() {
  return String(firstInput + secondInput);
}

function substractOperation(firstInput, secondInput) {
  return String(firstInput - secondInput);
}

function multiplyOperation(firstInput, secondInput) {
  return String(firstInput * secondInput);
}

function divideOperation(firstInput, secondInput) {
  return String(parseInt(firstInput / secondInput));
}
