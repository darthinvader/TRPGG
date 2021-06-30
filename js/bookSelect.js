import "core-js/es/array";

const categoriesElements = Array.from(document.querySelectorAll(".category"));
const books = document.querySelectorAll(".book");
books.forEach((book) => (book.hideCounter = 0));
let categories = [];

const elementNotSelected = function (el) {
  return !el.classList.contains("category__selected");
};

const hideAllBooks = function () {
  books.forEach((book) => book.classList.add("hidden"));
};

const showAllBooks = function () {
  books.forEach((book) => book.classList.remove("hidden"));
};

const hideOrShowBooks = function (ev) {
  // If all categories are diselected then that means
  // that this one that was selected was the first one
  // thus we hide all book to reveal only the once with the same category
  if (categoriesElements.every(elementNotSelected)) {
    hideAllBooks();
  }

  element = ev.srcElement;
  keyword = element.dataset.keyword;
  element.classList.toggle("category__selected");
  element.classList.contains("category__selected")
    ? showBooks(keyword)
    : hideBooks(keyword);
  // If all the categories are diselected after the element has been clicked
  // then it means that this category was the last and was diselected
  // thus we show them all the categories
  if (categoriesElements.every(elementNotSelected)) {
    showAllBooks();
  }
};

const showBookAndUpdateCounter = function (book) {
  book.classList.remove("hidden");
  book.hideCounter++;
};

const showBooks = function (keyword) {
  books.forEach((book) => {
    JSON.parse(book.dataset["keywords"]).indexOf(keyword) > -1 &&
      showBookAndUpdateCounter(book);
  });
};

const hideBookAndUpdateCounter = function (book) {
  book.hideCounter--;
  book.hideCounter || book.classList.add("hidden");
};

const hideBooks = function (keyword) {
  books.forEach((book) => {
    JSON.parse(book.dataset["keywords"]).indexOf(keyword) > -1 &&
      hideBookAndUpdateCounter(book);
  });
};

categoriesElements.forEach((element) => {
  element.addEventListener("click", hideOrShowBooks);
});

const addOrRemoveFromCategories = function (ev) {
  category = ev.srcElement.dataset.keyword;
  if (categories.indexOf(category) > -1) {
    categories.pop(category);
  } else {
    categories.push(category);
  }
};

categoriesElements.forEach((element) => {
  element.addEventListener("click", addOrRemoveFromCategories);
});
export default categories;
