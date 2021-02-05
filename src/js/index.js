const state = {
  tempInput: "",
  firstInput: "",
  secondInput: "",
  operation: "",
  error: false,
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
      state.tempInput = input;
    });
  }
}

function updateFirstInputAndOperator(operation, firstInput, operator) {
  if (operation.innerText !== "=") {
    state.operation = operator;
    firstInput = state.tempInput;
  }

  return firstInput;
}

function resetState() {
  state.tempInput = "";
  state.firstInput = "";
  state.secondInput = "";
  state.operation = "";
}

function isDivideByZeroPossible() {
  let isDivideByZeroPossible = false;

  if (state.operation === "/" && state.secondInput === "0") {
    isDivideByZeroPossible = true;

    resetState();
    state.error = true;
  }

  return isDivideByZeroPossible;
}

function onClickedEqual() {
  const operation = document.getElementsByClassName("operation")[4];
  const total = document.getElementById("total");
  let result = "";

  operation.addEventListener("click", () => {
    if (state.operation === "X") {
      state.operation = "*";
    }

    if (isDivideByZeroPossible()) {
      result = "오류";
      resetState();
    } else if (state.operation !== "=") {
      result = parseInt(
        eval(state.firstInput + state.operation + state.secondInput)
      );
      state.firstInput = String(result);
    }

    total.innerText = result;
  });
}

function onClickedOperation() {
  const operations = document.getElementsByClassName("operation");
  let firstInput = state.firstInput;
  let secondInput = "";
  onClickedDigit();

  for (let operation of operations) {
    operation.addEventListener("click", () => {
      let operator = operation.innerText;

      if (firstInput === "" || state.error) {
        firstInput = updateFirstInputAndOperator(
          operation,
          firstInput,
          operator
        );
        state.firstInput = firstInput;
      }

      if (operator !== "=" && operator !== "") {
        state.operation = operator;
        if (state.error) {
          state.firstInput = state.tempInput;
          state.error = false;
        }
      }

      onClickedDigit();
      secondInput = state.tempInput;
      state.secondInput = secondInput;
    });
  }

  onClickedEqual();
}

function modifier() {
  const modifier = document.getElementsByClassName("modifier")[0];
  const total = document.getElementById("total");

  modifier.addEventListener("click", () => {
    state.error = true;
    resetState();
    total.innerText = "0";
  });
}

new modifier();
new onClickedOperation();
