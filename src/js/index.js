import Calculator from './calculator.js';
import User from './user.js';

class App {
  constructor() {
    this.user = new User(new Calculator());
  }
}

new App();
