import "core-js/es/array";

const categoriesElements = Array.from(document.querySelectorAll(".category"));
let categories = [];

const addOrRemoveFromCategories = function (ev) {
  const category = ev.srcElement.dataset.keyword;
  if (categories.indexOf(category) > -1) {
    categories.pop(category);
  } else {
    categories.push(category);
  }

  ev.srcElement.classList.toggle("category__selected");
};

categoriesElements.forEach((element) => {
  element.addEventListener("click", addOrRemoveFromCategories);
});
export default categories;
