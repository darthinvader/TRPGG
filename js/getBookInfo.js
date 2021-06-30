import regeneratorRuntime from "regenerator-runtime";

const getGoogleSheet = async function () {
  const js = await fetch(
    "https://spreadsheets.google.com/feeds/cells/1mGh5t6i60bacULLWMz3uPZZNiA_8HWz79cBC0IEQBj0/1/public/full?alt=json"
  );
  const finalJson = await js.json();

  console.log(finalJson);
  return finalJson;
};
