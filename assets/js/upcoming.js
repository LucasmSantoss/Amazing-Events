import { addCheckbox , allCards, createCheckbox, categoryFilter, filterSearch , addCardUpcomingDate} from "../module/functions.js"


const tarjets = document.getElementById("past-cards");

const filterCheckbox = Array.from(new Set(data.events.map(card => card.category)));
const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");

addCheckbox(filterCheckbox,categoryCheckBox);


///////////// Fetch ///////////////

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      addCardUpcomingDate(data.events , tarjets )
      }
      );
      



////// Events ///////////////

categoryCheckBox.addEventListener("change", () => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCardUpcomingDate(filters,tarjets);
});

inputSearch.addEventListener("keyup", (e) => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCardUpcomingDate(filters,tarjets);
});

inputSearch.addEventListener("submit" , (e) => {
  e.preventDefault();
})