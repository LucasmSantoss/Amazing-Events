import {
  addCheckbox,
  categoryFilter,
  filterSearch,
  printError,
  addCard,
  cardsFilterPast,
} from "../module/functions.js";

const tarjets = document.getElementById("past-cards");

const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");

///////////// Fetch ///////////////

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then((data) => {
    const currentDate = data.currentDate;
    const dataEvents = data.events;
    addCard(cardsFilterPast(dataEvents, currentDate), tarjets);
    const filterCheckbox = Array.from(
      new Set(
        dataEvents
          .filter((event) => event.date <= currentDate)
          .map((card) => card.category)
      )
    );
    addCheckbox(filterCheckbox, categoryCheckBox);

    categoryCheckBox.addEventListener("change", () => {
      let search = inputSearch[0].value.toLowerCase();
      let searchFilter = filterSearch(
        search,
        cardsFilterPast(dataEvents, currentDate)
      );
      let filters = categoryFilter(searchFilter);
      cardsFilterPast(filters, tarjets);
      printError(filters, tarjets);
    });

    inputSearch.addEventListener("keyup", () => {
      let search = inputSearch[0].value.toLowerCase();
      let searchFilter = filterSearch(
        search,
        cardsFilterPast(dataEvents, currentDate)
      );
      let filters = categoryFilter(searchFilter);
      cardsFilterPast(filters, tarjets);
      printError(filters, tarjets);
    });

    inputSearch.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
