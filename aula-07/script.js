const nomeLoja = "Minha Loja Online";
let produto1 = "Smartphone";
let preco1 = 1500;
let emPromocao = true;
let precoFinal;

function calcularDesconto(preco, desconto) {
  return preco - preco * desconto;
}

if (emPromocao) {
  precoFinal = calcularDesconto(preco1, 0.1);
} else {
  precoFinal = preco1;
}

console.log(`Produto: ${produto1}`);
console.log(`Preço final: R$ ${precoFinal}`);

const produtos = [
  { nome: "Smartphone", preco: 1500 },
  { nome: "Camiseta", preco: 80 },
  { nome: "Relógio", preco: 250 },
];

for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto: ${produtos[i].nome} - R$ ${produtos[i].preco}`);
}

const exibirProduto = (produto) => {
  return `Produto: ${produto.nome} - R$ ${produto.preco}`;
};
console.log(exibirProduto(produtos[0]));



const listaProdutos = document.getElementById("lista-produtos");

for (let i = 0; i < produtos.length; i++) {

  let preco = produtos[i].preco;

  // Aplica desconto apenas ao Smartphone
  if (produtos[i].nome === "Smartphone") {
    preco = calcularDesconto(preco, 0.10);
  }

  listaProdutos.innerHTML += `
    <div class="card-produto">
      <h3>${produtos[i].nome}</h3>
      <p>Preço: R$ ${preco.toFixed(2)}</p>
    </div>
  `;
}





























// Cria uma constante que puxa a id "Header"
const header = document.getElementById("header");
// Quando descer um pouco o Header vai fazer algo
window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Cria uma constante que puxa a id "Body"
const body = document.getElementById("body");
// Quando descer um pouco o Body vai fazer algo
window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 900) {
    header.classList.remove("scrolled");
    return;
  }

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
/* Eu sei que eu poderia fazer direto no CSS. Mas eu prefiro desse jeito pela velocidade.

html {
    scroll-behavior: smooth;
}

*/
