const tarjets = document.getElementById("cards");
let cards = data.events;
let boxCards = "";

for (let card of cards) {
  boxCards += `<div class="card p-3 m-1 bg-dark" style="width: 18rem">
    <img
      src= ${card.image}
      class="card-img-top"
      style="height: 10rem"
      alt="cine"
    />
    <div class="card-body d-flex flex-column justify-content-around">
            <h5 class="card-title text-white fs-4">${card.name}</h5>
            <p class="card-text text-white fs-5">
              ${card.description}
            </p>
            <p class="card-text text-white fs-5"> Price: $${card.price} </p>
            <a href="../assets/details.html" class="btn bg-dark-subtle d-flex justify-content-end " style="width: 4.5rem;"
              >Details</a
            >
          </div>
        </div>`;
}

tarjets.innerHTML = boxCards;
