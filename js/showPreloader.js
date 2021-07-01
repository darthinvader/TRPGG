const booksContainer = document.querySelector(".books");

const renderPreloader = () => {
  const html = `
    <div class="book loader" class="book__link">
      <div class="loader__img--wrapper">
        <div class="loader__img--aspect-ratio-wrapper">
          <div class="loader__img"></div>
        </div>
      </div>
      <div class="loader__title"></div>
      <div class="loader__description"></div>
    </div>`;

  booksContainer.insertAdjacentHTML("beforeend", html);
};

for (let step = 0; step < 20; step++) {
  console.l;
  renderPreloader();
}
