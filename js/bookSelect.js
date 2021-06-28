selectors = Array.from(document.querySelectorAll(".selector"));
books = document.querySelectorAll(".book");

console.log(JSON.parse(books[1].dataset["keywords"]));

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

const showBooks = function (keyword) {};

const hideBooks = function (keyword) {};

selectors.forEach((element) => {
  element.addEventListener("click", hideOrShowBooks);
});
