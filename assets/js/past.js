import { addCheckbox , categoryFilter, filterSearch , addCardUpcomingDate} from "../module/functions.js"


//////////////////////// NO ANDA EL FILTRO 
/////////////////////////////// CRUZADO , ARREGLAR!!//////

const tarjets = document.getElementById("past-cards");

const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");

///////////// Fetch ///////////////

const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .catch(err => console.log(err));

const currentDate = data.currentDate;


addCardUpcomingDate(data.events , currentDate , false, tarjets)

const filterCheckbox = Array.from(new Set(data.events.map(card => card.category)));

addCheckbox(filterCheckbox,categoryCheckBox);

////// Events ///////////////

categoryCheckBox.addEventListener("change", () => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCardUpcomingDate(filters , currentDate , false, tarjets);
});

inputSearch.addEventListener("keyup", (e) => {
  let search = inputSearch[0].value.toLowerCase();
  let searchFilter = filterSearch(search, data.events);
  let filters = categoryFilter(searchFilter);
  addCardUpcomingDate(filters , currentDate , false, tarjets);
});

inputSearch.addEventListener("submit" , (e) => {
  e.preventDefault();
})