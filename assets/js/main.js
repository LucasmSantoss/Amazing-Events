const tarjets = document.getElementById("cards");
const cardsData = data.events;
const filterCheckbox = Array.from(new Set(cardsData.map(card => card.category)));
const categoryCheckBox = document.getElementById("checkbox");

const inputSearch = document.getElementById("search");

allCards(cardsData);
createCheckbox(filterCheckbox, categoryCheckBox);

////// Functions ///////////////

function allCards(events) {
  if (events.length === 0) {
    tarjets.innerHTML = `<div class="error m-auto"> <p class="text-center fs-3"> No events found</p> 
    <img src="./assets/imgs/error.png" alt="error"> </div>;`;
  } else {
    let boxCards = "";
    for (let card of events) {
      boxCards += `<div class="card p-3 m-1 bg-dark" style="width: 18rem">
  <img
    src= ${card.image}
    class="card-img-top"
    style="height: 10rem"
    alt="cine"
  />
  <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title text-white fs-4">${card.name}</h5>
          <p class="card-text text-white fs-5"> ${card.date} </p>
          <p class="card-text text-white fs-5">
            ${card.description}
          </p>
          <p class="card-text text-white fs-5"> Price: $${card.price} </p>
          <a href="../assets/details.html?id=${card._id}&name=${card.name}" class="btn bg-dark-subtle d-flex justify-content-end " style="width: 4.5rem;"
            >Details</a
          >
        </div>
  </div>`;
    }
    tarjets.innerHTML = boxCards;
  }
}

function createCheckbox(lista, elemento) {
  let checkBoxDiv = "";
  lista.forEach((check) => {
    checkBoxDiv += `<div class="input-group-text m-2" style="border-style: none;" >
    <label class="text-black fs-5 m-2 p-1">
      <input
        class="form-check-input"
        type="checkbox"
        aria-label="Checkbox for following text input"
        value="${check}"
      />
      ${check}
    </label> </div>`;
  });
  elemento.innerHTML = checkBoxDiv;
}

function categoryFilter(event) {
  let inputFilter = [...document.querySelectorAll('input[type="checkbox"]:checked')].map((element) => element.value);
  if (inputFilter.length === 0) {
    return event;
  }
  return event.filter((filters) => inputFilter.includes(filters.category));
}

function filterSearch(search, e) {
  let arrayFilter = e.filter((searchFilter) => searchFilter.name.toLowerCase().includes(search));
  return arrayFilter;
}

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
