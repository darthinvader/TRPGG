import "core-js/es/array";
import regeneratorRuntime, { async } from "regenerator-runtime";
import books from "./getBookInfo.js";
import categories from "./bookSelect.js";

const booksContainer = document.querySelector(".books");
let booksFullfiled = false;
console.log(booksContainer);

const renderBooks = () => {
  // Guard Clause
  if (!booksFullfiled) return;
};

(async () => {
  await books;
  booksFullfiled = true;
  renderBooks();
})();

console.log(booksFullfiled);
