export default class CalculatorView {
  #$app;

  constructor() {
    this.#$app = document.querySelector('#app');
    this.render();
  }

  render() {
    this.#$app.innerHTML = `
      <div class="calculator">
        <h1 id="total">0</h1>
        <div class="digits flex">
          <button class="digit" data-key="9">9</button>
          <button class="digit" data-key="8">8</button>
          <button class="digit" data-key="7">7</button>
          <button class="digit" data-key="6">6</button>
          <button class="digit" data-key="5">5</button>
          <button class="digit" data-key="4">4</button>
          <button class="digit" data-key="3">3</button>
          <button class="digit" data-key="2">2</button>
          <button class="digit" data-key="1">1</button>
          <button class="digit" data-key="0">0</button>
        </div>
        <div class="modifiers subgrid">
          <button class="modifier">AC</button>
        </div>
        <div class="operations subgrid">
          <button class="operation">/</button>
          <button class="operation">X</button>
          <button class="operation">-</button>
          <button class="operation">+</button>
          <button class="operation">=</button>
        </div>
      </div>`;
  }
}
