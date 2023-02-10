import { allCards, createCheckbox, categoryFilter, filterSearch } from "../module/functions.js"

const tarjets = document.getElementById("cards");
const cardsData = data.events;
const filterCheckbox = Array.from(new Set(cardsData.map(card => card.category)));
const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");

allCards(cardsData);
createCheckbox(filterCheckbox, categoryCheckBox);

////// Events ///////////////

categoryCheckBox.addEventListener("change", () => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFunction = filterSearch(search, cardsData);
  let filters = categoryFilter(searchFunction);
  allCards(filters);
});

inputSearch.addEventListener("keyup", (e) => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFunction = filterSearch(search, cardsData);
  let filters = categoryFilter(searchFunction);
  allCards(filters);
});

inputSearch.addEventListener("submit" , (e) => {
  e.preventDefault();
})
