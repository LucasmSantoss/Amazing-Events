import {
  addCheckbox,
  categoryFilter,
  filterSearch,
  addCard,
  printError,
} from "../module/functions.js";

const tarjets = document.getElementById("cards");
const categoryCheckBox = document.getElementById("checkbox");
const inputSearch = document.getElementById("search");

/////////// Fetch ///////////////

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then((data) => {
    const dataEvents = data.events;
    addCard(dataEvents, tarjets);
    const filterCheckbox = Array.from(
      new Set(dataEvents.map((card) => card.category))
    );

    addCheckbox(filterCheckbox, categoryCheckBox);
    categoryCheckBox.addEventListener("change", () => {
      let search = inputSearch[0].value.toLowerCase();
      let searchFilter = filterSearch(search, dataEvents);
      let filters = categoryFilter(searchFilter);
      addCard(filters, tarjets);
      printError(filters, tarjets);
    });

    inputSearch.addEventListener("keyup", () => {
      let search = inputSearch[0].value.toLowerCase();
      let searchFilter = filterSearch(search, dataEvents);
      let filters = categoryFilter(searchFilter);
      addCard(filters, tarjets);
      printError(filters, tarjets);
    });

    inputSearch.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  })
  .catch((err) => console.log(err));



