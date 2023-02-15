import { addCheckbox , categoryFilter, filterSearch , cardFilterUpcoming, printError, addCard } from "../module/functions.js"


const tarjets = document.getElementById("upcoming-cards");

const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");



fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(res => res.json())
  .then((data) => {
    
    const currentDate = data.currentDate;
    
    const dataEvents = data.events;
    
    addCard(cardFilterUpcoming(dataEvents, currentDate), tarjets)
    
    const filterCheckbox = Array.from(new Set ( dataEvents.filter(event => event.date >= currentDate).map(card => card.category)));
    
    addCheckbox(filterCheckbox,categoryCheckBox);
    
    categoryCheckBox.addEventListener("change", () => {
      let search = inputSearch[0].value.toLowerCase();
      let searchFilter = filterSearch(search, cardFilterUpcoming(dataEvents, currentDate) );
      let filters = categoryFilter(searchFilter);
      console.log(filters)
      cardFilterUpcoming(filters, tarjets);
      printError(filters, tarjets);
    });
    
    inputSearch.addEventListener("keyup", () => {
      let search = inputSearch[0].value.toLowerCase();
      let searchFilter = filterSearch(search, cardFilterUpcoming(dataEvents, currentDate));
      let filters = categoryFilter(searchFilter);
      cardFilterUpcoming(filters, tarjets);
      printError(filters, tarjets);
    });
    
    inputSearch.addEventListener("submit" , (e) => {
      e.preventDefault();
    })
  })
    
////// Events ///////////////

