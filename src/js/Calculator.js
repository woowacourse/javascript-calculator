export default function Calculator() {
  this.$total = document.querySelector('#total');
  this.totalText = '0';
  this.numbers = [];
  this.numberIndex = 0;
  this.operation = '';

  document.querySelector('.digits').addEventListener('click', (e) => {
    if (!e.target.classList.contains('digit')) {
      return;
    }

    if (this.numbers[this.numberIndex] && this.numbers[this.numberIndex].length >= 3) {
      alert('숫자는 세자리까지 입력이 가능해요!!');
      return;
    }

    this.setState({
      nextNumber: this.numbers[this.numberIndex]
        ? this.numbers[this.numberIndex] + e.target.textContent
        : e.target.textContent,
    });
  });

  document.querySelector('.modifier').addEventListener('click', (e) => {
    this.setState({ nextNumbers: [], nextTotalText: '0' });
  });

  document.querySelector('.operations').addEventListener('click', (e) => {
    if (!e.target.classList.contains('operation')) {
      return;
    }

    if (e.target.textContent === '=') {
      const result = this.operate();
      this.setState({ nextOperation: '', nextNumbers: [], nextNumberIndex: 0, nextTotalText: result.toString() });
    } else {
      this.setState({ nextOperation: e.target.textContent, nextNumberIndex: this.numberIndex + 1 });
    }
  });

  this.operate = () => {
    switch (this.operation) {
      case '+':
        return Number(this.numbers[0]) + Number(this.numbers[1]);

      case '-':
        return Number(this.numbers[0]) - Number(this.numbers[1]);

      default:
    }
  };

  this.setState = ({ nextNumbers, nextTotalText, nextNumber, nextOperation, nextNumberIndex }) => {
    if (nextNumber) {
      this.totalText = nextNumber;
      this.numbers[this.numberIndex] = nextNumber;
    }

    if (nextNumbers) {
      this.numbers = nextNumbers;
    }

    if (nextTotalText) {
      this.totalText = nextTotalText;
    }

    if (nextOperation && nextNumberIndex) {
      this.operation = nextOperation;
      this.numberIndex = nextNumberIndex;
    }

    this.render();
  };

  this.render = () => {
    this.$total.innerHTML = this.totalText;
  };
}
