function calculator() {
  const $total = document.querySelector('#total');
  const $digits = document.querySelector('.digits');

  $digits.addEventListener('click', (e) => {
    if (!e.target.classList.contains('digit')) {
      return;
    }

    let totalText = $total.textContent;

    if (totalText === '0') {
      totalText = '';
    }

    $total.innerHTML = totalText + e.target.textContent;
  });
}

new calculator();
