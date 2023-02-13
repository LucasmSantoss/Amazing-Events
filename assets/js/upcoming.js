import { addCheckbox , categoryFilter, filterSearch , addCardUpcomingDate} from "../module/functions.js"


const tarjets = document.getElementById("upcoming-cards");

const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");



///////////// Fetch ///////////////

 const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .catch(err => console.log(err));

const currentDate = data.currentDate;


addCardUpcomingDate(data.events , currentDate , true, tarjets)

const filterCheckbox = Array.from(new Set(data.events.map(card => card.category)));

addCheckbox(filterCheckbox,categoryCheckBox);

////// Events ///////////////

categoryCheckBox.addEventListener("change", () => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCardUpcomingDate(filters , currentDate , true, tarjets);
});

inputSearch.addEventListener("keyup", (e) => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCardUpcomingDate(filters, currentDate , true, tarjets);
});

inputSearch.addEventListener("submit" , (e) => {
  e.preventDefault();
})