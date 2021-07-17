import BookCard from "./BookCard";
import BookCardPreloader from "./BookCardPreloader";
const BookCardsContainer = ({ books, activeCategories }) => {
  // if books is empty, show a preloader
  if (!books) {
    const preloadedCards = [];
    for (let i = 0; i < 35; i++) {
      preloadedCards.push(<BookCardPreloader key={i} />);
    }
    return preloadedCards;
  }

  const bookHasCategory = (book) => {
    // Guarantee that there exists at least one category
    if (activeCategories.length === 0) {
      return true;
    }

    // Check if book has a category
    return activeCategories.some((category) =>
      book.categories.includes(category.toLowerCase())
    );
  };
  // Filter books by active categories
  return books.map((book) =>
    bookHasCategory(book) ? <BookCard key={book.title} book={book} /> : null
  );
};

export default BookCardsContainer;
