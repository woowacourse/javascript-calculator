import { ERROR_MESSAGE } from './errorMessage.js';

export default function Calculator() {
  this.$total = document.querySelector('#total');
  this.totalNumber = 0;
  this.numbers = [0];
  this.numberIndex = 0;
  this.operation = '';

  document.querySelector('.digits').addEventListener('click', (e) => {
    if (!e.target.classList.contains('digit')) {
      return;
    }

    if (this.numbers[this.numberIndex] >= 100) {
      alert(ERROR_MESSAGE.OVER_MAX_NUMBER);
      return;
    }

    const inputNumber = e.target.textContent;

    this.setState({
      nextNumber: this.numbers[this.numberIndex] ? this.numbers[this.numberIndex] + inputNumber : e.target.textContent,
    });
  });

  document.querySelector('.modifier').addEventListener('click', (e) => {
    this.setState({ nextNumbers: [], nextTotalNumber: 0 });
  });

  document.querySelector('.operations').addEventListener('click', (e) => {
    if (!e.target.classList.contains('operation')) {
      return;
    }

    if (e.target.textContent === '=') {
      const result = this.operate();

      this.setState({ nextOperation: '=', nextNumbers: [0], nextNumberIndex: 0, nextTotalNumber: result });
    } else {
      this.setState({ nextOperation: e.target.textContent, nextNumberIndex: this.numberIndex + 1 });
    }
  });

  this.operate = () => {
    switch (this.operation) {
      case '+':
        return this.numbers.reduce((result, num) => result + num);

      case '-':
        return this.numbers.reduce((result, num) => result - num);

      case 'X':
        return this.numbers.reduce((result, num) => result * num);

      case '/':
        if (Number(this.numbers[1]) === 0) {
          alert(ERROR_MESSAGE.DIVIDE_BY_ZERO);
          return 0;
        }
        return Math.floor(this.numbers.reduce((result, num) => result / Number(num)));

      default:
    }
  };

  this.setState = ({ nextNumbers, nextTotalNumber, nextNumber, nextOperation, nextNumberIndex }) => {
    if (nextNumber) {
      this.totalNumber = Number(nextNumber);
      this.numbers[this.numberIndex] = Number(nextNumber);
    }

    if (nextNumbers) {
      this.numbers = nextNumbers;
    }

    if (typeof nextTotalNumber === 'number') {
      this.totalNumber = nextTotalNumber;
    }

    if (nextOperation) {
      this.operation = nextOperation;
      this.numberIndex = nextNumberIndex;
    }

    this.render();
  };

  this.render = () => {
    this.$total.innerHTML = this.totalNumber;
  };
}
