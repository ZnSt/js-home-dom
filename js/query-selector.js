const magicBtn = document.querySelector(".js-magic-btn");
magicBtn.addEventListener("click", () => {});

// const navEl = document.querySelector(".site-nav");
// console.log(navEl);

// const navLinksElem = document.querySelectorAll(".site-nav__link");
// console.log(navLinksElem);

const currentPage = "/portfolio";

const linkEl = document.querySelector(`.site-nav__link[href='${currentPage}']`);
console.log(linkEl);

linkEl.classList.add("qweqwe");
