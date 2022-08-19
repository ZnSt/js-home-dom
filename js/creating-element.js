const titleEl = document.createElement("h1");
titleEl.classList.add("title");

titleEl.textContent = "Это заголовок для страницы";

const imgEl = document.createElement("img");
imgEl.src = "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb.jpg";
imgEl.alt = "Cat with bow!";
imgEl.width = 200;
console.log(imgEl);

const heroEl = document.querySelector(".hero");
heroEl.append(titleEl, imgEl);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Личный кабинет";
navLinkEl.href = "/profile";

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".site-nav");
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
