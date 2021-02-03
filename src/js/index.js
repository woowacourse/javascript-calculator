class Calculator {
  constructor() {
    // this.elements = {
    //   total: document.querySelector('#total'),
    //   digits: document.querySelector('.digits'),
    //   modifiers: document.querySelector('.modifiers'),
    //   operations: document.querySelector('.operations'),
    // };

    this.setEventListener();
  }

  setEventListener() {
    const $digits = document.querySelector('.digits');
    const $modifiers = document.querySelector('.modifiers');
    const $total = document.querySelector('#total');

    $digits.addEventListener('click', (event) => {
      if (event.target.className !== 'digit') return;

      const digit = event.target.innerText;

      if ($total.innerText.length >= 3) return;

      if ($total.innerText === '0') {
        $total.innerText = '';
      }

      $total.innerText += digit;
    });

    $modifiers.addEventListener('click', (event) => {
      if (event.target.className !== 'modifier') return;

      const modifier = event.target.innerText;

      if (modifier === 'AC') {
        this.allClear();
      }
    });
  }

  allClear() {
    const $total = document.querySelector('#total');
    $total.innerText = '0';
  }
}

new Calculator();
