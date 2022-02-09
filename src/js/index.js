import Calculator from './calculator.js';
import { User } from './user.js';

class App {
  constructor() {
    this.calculator = new Calculator();
    this.user = new User(this.calculator);
  }
}

const app = new App();
