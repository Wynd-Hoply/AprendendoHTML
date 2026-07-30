let productList;
let cartList;
let totalEl;

let btnFinalizar;
let mensagemCompra;

let cartCount;
let miniList;
let miniTotal;

let carrinho = [];

const PRODUTOS = [
  {
    id: 1,
    nome: "Smartphone",
    preco: 7500,
    imagem: "img/iphone.jpg",
  },
  {
    id: 2,
    nome: "Camiseta",
    preco: 250,
    imagem: "img/camisa.jpg",
  },
  {
    id: 3,
    nome: "Relógio",
    preco: 100000,
    imagem: "img/relogio.jpg",
  },
];

function renderizarProdutos() {
  productList.innerHTML = "";

  PRODUTOS.forEach((produto) => {
    const CARD = document.createElement("div");
    CARD.classList.add("product-card");

    CARD.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco}</p>
    <button>Adicionar ao carrinho</button>
    `;

    CARD.querySelector("button").addEventListener("click", () => {
      adicionarAoCarrinho(produto.id);
    });

    productList.appendChild(CARD);
  });
}

function adicionarAoCarrinho(id) {
  const produto = PRODUTOS.find((p) => p.id === id);

  carrinho.push(produto);
  salvarCarrinho();
}

// renderizar carrinho
function renderizarCarrinho() {
  cartList.innerHTML = "";

  let total = 0;
  carrinho.forEach((item, index) => {
    total += item.preco;

    const li = document.createElement("li");

    li.innerHTML = `
    ${item.nome} - R$ ${item.preco}
    <button>Remover</button>
    `;

    li.querySelector("button").addEventListener("click", () => {
      carrinho.splice(index, 1);
      salvarCarrinho();
    });
    cartList.appendChild(li);
  });

  totalEl.textContent = `Total: R$ ${total}`;
}

// mini cart

function atualizarMiniCarrinho() {
  cartCount.textContent = carrinho.length;

  miniList.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {
    total += item.preco;

    const li = document.createElement("li");
    li.textContent = `Total: R$ ${total}`;
  });
}

// Finalizar compra

function finalizarCompra() {
  if (carrinho.length === 0) {
    mensagemCompra.textContent = "Seu carrinho tá vazio chefe!";
    mensagemCompra.style.color = "red";
    return;
  }

  mensagemCompra.textContent = "Compra realizada chefe!";
  mensagemCompra.style.color = "green";

  carrinho = [];

  salvarCarrinho();
}

// Localstorage

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  renderizarCarrinho();
  atualizarMiniCarrinho();
}

// INICIALIZAÇÃO DO SISTEMA!

document.addEventListener("DOMContentLoaded", () => {
  // Captura elementos do DOM
  productList = document.getElementById("product-list");
  cartList = document.getElementById("cart-list");
  totalEl = document.getElementById("total");

  cartCount = document.getElementById("cart-count");
  miniList = document.getElementById("mini-cart-list");
  miniTotal = document.getElementById("mini-total");

  // Elementos do checkout
  btnFinalizar = document.getElementById("finalizar-compra");
  mensagemCompra = document.getElementById("mensagem-compra");

  // Recupera dados salvos
  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Renderização inicial
  renderizarProdutos();
  renderizarCarrinho();
  atualizarMiniCarrinho();

  // Evento do botão finalizar compra
  btnFinalizar.addEventListener("click", finalizarCompra);
});

const FORM = document.getElementById("formulario");
const MENSAGEM = document.getElementById("mensagem");

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const NOME = document.getElementById("name").value;
  const EMAIL = document.getElementById("email").value;

  if (NOME === "" || EMAIL === "") {
    MENSAGEM.textContent = "Por favor, preencha todos os campos.";
    MENSAGEM.style.color = "red";
  } else {
    MENSAGEM.textContent = "Formulário enviado com sucesso!";
    MENSAGEM.style.color = "green";
  }
});

const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista-tarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = tarefa;

    const btn = document.createElement("button");
    btn.textContent = "Remover";

    btn.addEventListener("click", () => {
      tarefas.splice(index, 1);
      salvar();
    });

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  renderizarTarefas();
}

botaoAdicionar.addEventListener("click", () => {
  const nova = inputTarefa.value;

  if (nova !== "") {
    tarefas.push(nova);
    inputTarefa.value = "";
    salvar();
  }
});

// iniciar
renderizarTarefas();

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
