const PRODUTOS = [
  {
    id: 1,
    nome: "Iphone Usado",
    preco: 500,
    categoria: "Eletrônicos",
    imagem: "/products-images/1"
  },
  {
    id: 2,
    nome: "Roupa original um POUCO rasgada",
    preco: 15,
    categoria: "Roupas",
    imagem: "/products-images/2"
  },
  {
    id: 3,
    nome: "Sofá só na Metade",
    preco: 220,
    categoria: "Movéis",
    imagem: "/products-images/3"
  }
];

// Destructuring
const {nome, preco} = PRODUTOS[0];
console.log("Sample")
console.log(`Produto: ${nome} - R$ ${preco}`)
console.log()

function listarProdutos(lista) {
  lista.forEach(produto => {
    console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`)
  })
}

listarProdutos(PRODUTOS);


// Filtrar por categoria
function filtrarPorCategoria(categoria) {
  return PRODUTOS.filter(produto => produto.categoria === categoria)
}

const eletronicos = filtrarPorCategoria("Eletrônicos");
console.log(eletronicos)

const NOVOSPRODUTOS = [
  ...PRODUTOS,
  {
    id: 4,
    nome: "Notebook GAYMER",
    preco: 2000,
    categoria: "Eletrônicos",
    imagem: "/product-images/4"
  },
  {
    id: 5,
    nome:"Fio Dental Largo",
    preco: 250,
    categoria: "Roupas",
    imagem: "/product-images/5"
  }
];

console.log(NOVOSPRODUTOS);

// testando JASON 13 FRIDAY
const produtosJSON = JSON.stringify(PRODUTOS);
console.log(produtosJSON);
const produtosConvertidos = JSON.parse(produtosJSON);
console.log(produtosConvertidos);























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
