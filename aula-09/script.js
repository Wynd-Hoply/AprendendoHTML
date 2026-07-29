const PRODUTOS = [
  {
    id: 1,
    nome: "Smartphone",
    preco: 7500,
    categoria: "Eletrônicos",
    imagem: "img/iphone.jpg",
  },
  {
    id: 2,
    nome: "Camiseta",
    preco: 250,
    categoria: "Roupas",
    imagem: "img/camisa.jpg",
  },
  {
    id: 3,
    nome: "Relógio",
    preco: 100000,
    categoria: "Acessórios",
    imagem: "img/relogio.jpg",
  },
];

const CONTAINER = document.getElementById("product-list");

function renderizarProdutos(lista) {
  CONTAINER.innerHTML = "";

  lista.forEach((produto) => {
    const CARD = document.createElement("div");
    CARD.classList.add("product-list");

    CARD.innerHTML = `
      <img src="${produto.imagem} " alt "${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco}</p>
      `;

    CONTAINER.appendChild(CARD);
  });
}

renderizarProdutos(PRODUTOS);

const novosProdutos = [
  ...PRODUTOS,
  {
    id: 4,
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    imagem: "https://via.placeholder.com/150",
  },
];

renderizarProdutos(novosProdutos);

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

const inputTarefa = document.getElementById("nova-tarefa")
const botaoAdicionar = document.getElementById("adicionar")
const lista = document.getElementById("lista-tarefas")

let tarefas















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
