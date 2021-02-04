export default function Calculator() {
  this.$total = document.querySelector('#total');
  this.$digits = document.querySelector('.digits');
  this.number = '0';

  this.$digits.addEventListener('click', (e) => {
    if (!e.target.classList.contains('digit')) {
      return;
    }

    if (this.number.length >= 3) {
      alert('숫자는 세자리까지 입력이 가능해요!!');
      return;
    }

    if (this.number === '0') {
      this.number = '';
    }

    this.setState(this.number + e.target.textContent);
  });

  this.setState = (nextNumber) => {
    this.number = nextNumber;
    this.render();
  };

  this.render = () => {
    this.$total.innerHTML = this.number;
  };
}
