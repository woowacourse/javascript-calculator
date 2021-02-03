const init = () => {

  const AC = document.querySelector(".modifier");
  const totalElement = document.getElementById('total');

  AC.addEventListener("click", () => {
    totalElement.innerHTML = 0;
  });
}

init();

