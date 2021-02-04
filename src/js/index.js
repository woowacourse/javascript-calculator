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

function onClickedOperation() {
  const operations = document.getElementsByClassName("operation");
  let firstInput = "";
  onClickedDigit();

  for (let operation of operations) {
    operation.addEventListener("click", () => {
      if (operation.innerText === "+") {
        state.operation = "+";
        firstInput = state.input;
      }
      if (operation.innerText === "-") {
        state.operation = "-";
      }
      if (operation.innerText === "X") {
        state.operation = "X";
      }
      if (operation.innerText === "/") {
        state.operation = "/";
      }

      onClickedDigit();
      let secondInput = state.input;
      console.log(firstInput, "뻐스트", secondInput, "쎄컨드");
    });
  }
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
