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

function calculation(operation, firstInput, operator) {
  if (operation.innerText !== "=") {
    state.operation = operator;
    firstInput = state.input;
  }

  return firstInput;
}

function onClickedOperation() {
  const operations = document.getElementsByClassName("operation");
  let firstInput = "";
  let secondInput = "";
  onClickedDigit();

  for (let operation of operations) {
    operation.addEventListener("click", () => {
      let operator = operation.innerText;
      firstInput = calculation(operation, firstInput, operator);

      onClickedDigit();
      secondInput = state.input;
    });
  }

  console.log(firstInput, secondInput);
}

new onClickedOperation();

function onClickedEqual() {
  const operation = document.getElementsByClassName("operation")[4];
  const total = document.getElementById("total");

  if (operation.innerText === "=") {
    state.secondInput = total.innerText;
    console.log(state);
  }
}
