const tarjets = document.getElementById("upcoming-cards");
let card = data.events;
let boxCards = "";
let currentDate = data.currentDate;

for (let cards of card) {
  if (cards.date > currentDate) {
    boxCards += `<div class="card p-3 m-1 bg-dark" style="width: 18rem">
        <img
          src= ${cards.image}
          class="card-img-top"
          style="height: 10rem"
          alt="cine"
        />
        <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title text-white fs-4">${cards.name}</h5>
                <p class="card-text text-white fs-5"> ${cards.date} </p>
                <p class="card-text text-white fs-5"> Price: $${cards.price} </p>
                <p class="card-text text-white fs-5">
                  ${cards.description}
                </p>
                <a href="../assets/details.html" class="btn bg-dark-subtle d-flex justify-content-end " style="width: 4.5rem;"
                  >Details</a
                >
              </div>
        </div>`;
  }
}

tarjets.innerHTML = boxCards;
