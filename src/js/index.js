const $total = document.querySelector('#total');
const $digits = document.querySelector('.digits');

const putNumber = ({ target }) => {
  if ($total.innerText === '0') {
    return ($total.innerText = target.innerText);
  }
  return ($total.innerText += target.innerText);
};

$digits.addEventListener('click', putNumber);
