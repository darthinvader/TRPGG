import BookCardPreloader from "./BookCardPreloader";

const BooksPreloader = () => {
  const preloadedCards = [];
  for (let i = 0; i < 35; i++) {
    preloadedCards.push(<BookCardPreloader key={i} />);
  }
  return preloadedCards;
};

export default BooksPreloader;
