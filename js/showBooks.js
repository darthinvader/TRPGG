import "core-js/es/array";
import regeneratorRuntime, { async } from "regenerator-runtime";
import booksPromise from "./getBookInfo.js";
import categories from "./bookSelect.js";

const booksContainer = document.querySelector(".books");
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

const renderBookWithCategories = () => {};

const renderBooks = () => {
  // Guard Clause
  console.log(books);
  if (!booksFullfiled) return;
  if (!categories.length) {
    renderAllBooks();
  } else {
    renderBookWithCategories();
  }
};

(async () => {
  books = await booksPromise;
  booksFullfiled = true;
  renderBooks();
})();

console.log(booksFullfiled);
