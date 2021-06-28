selectors = Array.from(document.querySelectorAll(".selector"));
books = document.querySelectorAll(".book");
books.forEach((book) => (book.hideCounter = 0));

const elementNotSelected = function (el) {
  return !el.classList.contains("selector__selected");
};

const hideAllBooks = function () {
  books.forEach((book) => book.classList.add("hidden"));
};

const showAllBooks = function () {
  books.forEach((book) => book.classList.remove("hidden"));
};

const hideOrShowBooks = function (ev) {
  // If all selectors are diselected then that means
  // that this one that was selected was the first one
  // thus we hide all book to reveal only the once with the same category
  if (selectors.every(elementNotSelected)) {
    hideAllBooks();
  }

  element = ev.srcElement;
  keyword = element.dataset.keyword;
  element.classList.toggle("selector__selected");
  element.classList.contains("selector__selected")
    ? showBooks(keyword)
    : hideBooks(keyword);
  // If all the selectors are diselected after the element has been clicked
  // then it means that this selector was the last and was diselected
  // thus we show them all the selectors
  if (selectors.every(elementNotSelected)) {
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

selectors.forEach((element) => {
  element.addEventListener("click", hideOrShowBooks);
});
