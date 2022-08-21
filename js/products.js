import products from "/data/prouct.js";

// console.log(productTitleEl);
// console.log(descrEl);
// console.log(priceEl);

console.log(products);

const makeProductCard = ({ name, descritpions, price }) => {
  const productArtEL = document.createElement("article");
  productArtEL.classList.add("product");

  const productTitleEl = document.createElement("h2");
  productTitleEl.classList.add("product__name");
  productTitleEl.textContent = name;

  const descrEl = document.createElement("p");
  descrEl.textContent = descritpions;
  descrEl.classList.add("product__descr");

  const priceEl = document.createElement("p");
  priceEl.classList.add("product__price");
  priceEl.textContent = `Цена: ${price} кредитов`;

  productArtEL.append(productTitleEl, descrEl, priceEl);

  return productArtEL;
};

const elements = products.map(makeProductCard);
console.log(elements);

const containerEl = document.querySelector(".js-product");

containerEl.append(...elements);
