import { Calculator } from './modules/index.js';

export default class App {
  constructor() {
    this.init();
  }

  init() {
    new Calculator();
  }
}

new App();
