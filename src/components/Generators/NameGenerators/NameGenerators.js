const NameGenerators = () => {
  const categories = [
    "Fantasy & Folklore",
    "Real Names",
    "Places & Locations",
    "Other Names",
    "Description Generators",
    "Other Gens",
  ];
  const categoriesElement = categories.map((category) => {
    return <li>{category}</li>;
  });
  return <ul>{categoriesElement}</ul>;
};

export default NameGenerators;
