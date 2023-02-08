const tarjets = document.getElementById("upcoming-cards");
let cards = data.events;
let currentDate = data.currentDate;
  
function allCards (e) {
  let boxCards = "";
for (let card of e) {
  if (card.date > currentDate) {
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

allCards(cards)


////// Search ///////////////

const inputSearch = document.querySelector(".form-control");

inputSearch.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  const eventSearch = category(cards);

  const events = eventSearch.filter((event) =>
    event.name.toLowerCase().includes(search)
  );

  allCards(events);

  let contain = Boolean(...events);
  if (!contain) {
    tarjets.innerHTML = `<div class="error m-auto"> <p class="text-center fs-3"> No events found</p> 
    <img src="./assets/imgs/error.png" alt="error"> </div>;`;
  } else {
    allCards(events);
  }
});

////// Checkbox ///////////////

const categoryCheckBox = document.getElementById("checkbox");

const checkBox = cards.map((card) => card.category);

const checkBoxCategory = new Set(checkBox);

const checkBoxArray = [...checkBoxCategory];

let checkBoxDiv = "";

for (let check of checkBoxArray) {
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
}

categoryCheckBox.innerHTML = checkBoxDiv;

categoryCheckBox.addEventListener("change", () => {
  let filterCheckbox = category(cards);
 
  allCards(filterCheckbox);
});

function category(e) {
  let inputFilter = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((element) => element.value);
  if (inputFilter.length === 0) {
    return e;
  }
  return e.filter((filtrado) => inputFilter.includes(filtrado.category));
}


