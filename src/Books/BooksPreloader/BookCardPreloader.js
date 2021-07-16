const BookCardPreloader = () => {
  return (
    <div className="bookCard bookLoader">
      <div className="bookLoader__img--wrapper">
        <div className="bookLoader__img--aspect-ratio-wrapper">
          <div className="bookLoader__img"></div>
        </div>
      </div>
      <div className="bookLoader__title"></div>
      <div className="bookLoader__description"></div>
    </div>
  );
};

export default BookCardPreloader;
