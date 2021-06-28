selectors = Array.from(document.querySelectorAll(".selector"));
books = document.querySelectorAll(".book");
books.forEach((book) => (book.hideCounter = 0));

console.log(books);
const isElementSelected = function (el) {
  return !el.classList.contains("selector__selected");
};

const hideAllBooks = function () {
  books.forEach((book) => book.classList.add("hidden"));
};

const showAllBooks = function () {
  books.forEach((book) => book.classList.remove("hidden"));
};

const hideOrShowBooks = function (ev) {
  if (selectors.every(isElementSelected)) {
    hideAllBooks();
  }

  element = ev.srcElement;
  keyword = element.dataset.keyword;
  element.classList.toggle("selector__selected");
  element.classList.contains("selector__selected")
    ? showBooks(keyword)
    : hideBooks(keyword);

  if (selectors.every(isElementSelected)) {
    showAllBooks();
  }
};

const showBookAndUpdateCounter = function (book) {
  book.classList.remove("hidden");
  book.hideCounter++;
};

const hideBook = function (book) {
  book.hideCounter--;
  book.hideCounter || book.classList.add("hidden");
};

const showBooks = function (keyword) {
  books.forEach((book) => {
    JSON.parse(book.dataset["keywords"]).indexOf(keyword) > -1 &&
      showBookAndUpdateCounter(book);
  });
};

const hideBooks = function (keyword) {
  books.forEach((book) => {
    JSON.parse(book.dataset["keywords"]).indexOf(keyword) > -1 &&
      hideBook(book);
  });
};

selectors.forEach((element) => {
  element.addEventListener("click", hideOrShowBooks);
});
