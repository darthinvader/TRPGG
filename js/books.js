import "core-js/es/array";
import regeneratorRuntime from "regenerator-runtime";
import booksPromise from "./getBookInfo.js";

const booksContainer = document.querySelector(".books");
export default books = undefined;

(async () => {
  books = await booksPromise;
})();
