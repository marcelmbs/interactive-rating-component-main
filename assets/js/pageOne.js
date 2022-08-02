// qualquer interação que você venha a ter com o DOM tem um custo.
// quanto mais você puder minimizar essas interações, melhor.
// Quando eu atribuo meu elemento DOM no início do script
// ao invés de fazer isso todas as vezes que eu chamo a function de submit ou
// de atribuição de valor, eu estou economizando.

// https://www.udacity.com/course/website-performance-optimization--ud884
const options = document.querySelectorAll(".number-area > .number");
const submit = document.querySelector(".submit");

// talvez ainda não seja a melhor solução, pois eu estou executando um loop dentro de outro, e
// isso pode aumentar e muito a complexidade do nosso algoritmo.
// Mas sempre que houver repetição, você pode deixar com que o código trabalhe pra você.
function toggleActive({ target }) {
  // O erro que você estava tomando, era pq ao passar pra page 2, você executava o mesmo script
  // porém, na page 2 você não tinha os elementos com a classe '.number'
  options.forEach((opt) => (opt.className = "number"));
  target.classList.add("active");
  valor(target.innerText);
}

function valor(value) {
  submit.addEventListener("click", function () {
    window.location.href = `./page-2.html?valor=${value}`;
  });
}

options.forEach((opt) => {
  opt.addEventListener("click", toggleActive);
});
