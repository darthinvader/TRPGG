categories = Array.from(document.querySelectorAll(".category"));
books = document.querySelectorAll(".book");
books.forEach((book) => (book.hideCounter = 0));

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
  if (categories.every(elementNotSelected)) {
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
  if (categories.every(elementNotSelected)) {
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

categories.forEach((element) => {
  element.addEventListener("click", hideOrShowBooks);
});
