import BookCard from "./BookCard";
import BookCardPreloader from "./BookCardPreloader";
import styles from "./BookCardsContainer.module.scss";

const BookCardsContainer = ({ books, activeCategories }) => {
  let cards = null;

  // If books are not yet downloaded, show a preloader
  if (!books) {
    const preloadedCards = [];
    for (let i = 0; i < 35; i++) {
      preloadedCards.push(<BookCardPreloader key={i} />);
    }
    cards = preloadedCards;
  }
  // If books are already downloaded, show the books
  else {
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
    cards = books.map((book) =>
      bookHasCategory(book) ? <BookCard key={book.title} book={book} /> : null
    );
  }

  return <div className={styles.BookCardsContainer}>{cards}</div>;
};

export default BookCardsContainer;
