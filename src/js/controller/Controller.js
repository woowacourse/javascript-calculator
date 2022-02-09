export default class Controller {
  constructor() {
    this.$app = document.querySelector("#app");
    this.$digits = [...document.querySelectorAll(".digit")];
    this.userInputString = "";
  }

  isClassListDigit(event) {
    if (event.target.classList.contains("digit")) {
      this.userInputString += event.target.innerText;
    }
  }

  clickEvent() {
    this.$app.addEventListener("click", (event) => {
      this.isClassListDigit(event);
    });
  }

  main() {
    this.clickEvent();
  }
}
