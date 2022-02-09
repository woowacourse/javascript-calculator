import { DOM } from "../constants.js";

export default class View {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
    this.$total = document.querySelector(DOM.$TOTAL);
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
    this.bindEventListener("click", DOM.$DIGIT, (e) => {
      callback(Number(e.target.innerText));
    });
  }

  bindClickOperationButton(callback) {
    this.bindEventListener("click", DOM.$OPERATION, (e) => {
      callback(e.target.innerText);
    });
  }

  bindClickACButton(callback) {
    this.bindEventListener("click", DOM.$MODIFIER, () => {
      callback();
    });
  }

  render(result) {
    this.$total.innerText = result;
  }
}
