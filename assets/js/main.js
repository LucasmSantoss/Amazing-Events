import { addCheckbox , categoryFilter, filterSearch, addCard, printError, } from "../module/functions.js"


const tarjets = document.getElementById("cards");


const categoryCheckBox = document.getElementById("checkbox");
const inputSearch = document.getElementById("search");



/////////// Fetch ///////////////

const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .catch(err => console.log(err));

addCard(data.events,tarjets )

const filterCheckbox = Array.from(new Set( data.events.map(card => card.category)));
addCheckbox(filterCheckbox,categoryCheckBox);


//////// Events ///////////////

categoryCheckBox.addEventListener("change", () => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCard(filters,tarjets)
  
});

inputSearch.addEventListener("keyup", (e) => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCard(filters,tarjets)
  
});

inputSearch.addEventListener("submit" , (e) => {
  e.preventDefault();
})
