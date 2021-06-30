import "core-js/es/array";
import regeneratorRuntime from "regenerator-runtime";
import booksPromise from "./getBookInfo.js";
import categories from "./bookSelect.js";

const booksContainer = document.querySelector(".books");
const categoriesElements = Array.from(document.querySelectorAll(".category"));

categoriesElements.forEach((el) => {
  el.addEventListener("click", (ev) => {
    renderBooks();
  });
});
let booksFullfiled = false;
let books = [];
console.log(booksContainer);

const renderBook = (book) => {
  const html = `
    <div class="book"'>
      <a target="_blank" href="${book.documentUrl}"
        class="book__link">
        <img src="${book.imgUrl}" alt="${book.title} Cover" class="book__img">
        <h2 class="book__title">${book.title}</h2>
        <p class="book__description">${book.description}</p>
      </a>
    </div>`;

  booksContainer.insertAdjacentHTML("beforeend", html);
};

const renderAllBooks = () => {
  books.forEach((book) => renderBook(book));
};

const renderBookWithCategories = () => {
  let booksToRender = new Set();

  categories.forEach((category) => {
    books.forEach((book) => {
      if (book.categories.indexOf(category) > -1) {
        booksToRender.add(book);
      }
    });
  });
  booksToRender = Array.from(booksToRender);
  booksToRender.forEach((book) => {
    renderBook(book);
  });
};

const renderBooks = () => {
  // Guard Clause
  if (!booksFullfiled) return;

  booksContainer.innerHTML = "";

  !categories.length ? renderAllBooks() : renderBookWithCategories();
};

(async () => {
  books = await booksPromise;
  booksFullfiled = true;
  renderBooks();
})();

console.log(booksFullfiled);
