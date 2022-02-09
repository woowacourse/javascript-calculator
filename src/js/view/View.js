export default class View {
  constructor() {
    this.$app = document.querySelector("#app");
    this.$total = document.querySelector("#total");
  }

  bindEventListener(type, selector, callback) {
    const children = [...document.querySelectorAll(selector)];
    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  bindClickDigitButton(callback) {
    this.bindEventListener("click", ".digit", (e) => {
      callback(e.target.innerText);
    });
  }

  bindClickOperationButton(callback) {
    this.bindEventListener("click", ".operation", (e) => {
      callback(e.target.innerText);
    });
  }

  bindClickACButton(callback) {
    this.bindEventListener("click", ".modifier", (e) => {
      callback();
    });
  }

  render(str) {
    this.$total.innerText = str;
  }
}
