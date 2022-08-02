const result = document.getElementById("result");

function initiateAsync() {
  const urlParams = new URLSearchParams(window.location.search);
  result.innerText = urlParams.get("valor");
}

// Sempre que você tiver acesso a um event js como atributo html, você terá aqui também.
// o equivalente costuma ser o mesmo nome, sem o prefixo 'on'.
// ex: onclick = click, onchange, onsubmit...
// https://www.w3schools.com/tags/ref_eventattributes.asp
window.addEventListener("load", initiateAsync);
