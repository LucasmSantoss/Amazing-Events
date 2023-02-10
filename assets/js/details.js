
const $container = document.getElementById( "detailsCard" );

const params = new URLSearchParams( location.search );
const id = params.get( "id" ); 
const details = data.events.find( (card) =>  card._id == id);
const nombre = params.get( "name" ); 


function estimateAsistence(contain) {
  let shows = "";
  if (contain.assistance) {
    shows = contain.assistance;
  } else if (contain.estimate) {
    shows = contain.estimate;
  }
  return shows;
}


$container.innerHTML = `<div class="row g-1 p">
<div class="col-md-4 d-flex justify-content-center align-items-center p-4">
  <img src="${details.image}" style="min-width: 20rem; max-width: 50rem; " class="img-fluid rounded-start " alt="Museum">
</div>
<div class="col-md-8 p-3">
  <div class="card-body">
    <h5 class="card-title text-white fs-3"> ${details.name}</h5>
    <p class="card-text text-white text-white fs-5"><small class="text-black"> ${details.date}</small> 2021-11-02 </p>
    <p class="card-text text-white fs-5"> ${details.description}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Place</small> ${details.place}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Capacity</small> ${details.capacity}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Assistance | Estimate</small> ${estimateAsistence(details)}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Price</small> ${details.price}</p>
  </div> </div>`