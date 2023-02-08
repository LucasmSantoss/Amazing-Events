
const $container = document.getElementById( "detailsCard" )

const params = new URLSearchParams( location.search )
const id = params.get( "id" ) 
const details = data.events.find( card =>  card._id == id)
const nombre = params.get( "name" )   
const aux = details.name.toUpperCase() + details.name.slice(1).toLowerCase()
document.title = `${aux}'s Details`; 


$container.innerHTML += `<div class="row g-1 p ">
<div class="col-md-4 d-flex justify-content-center align-items-center p-2 ">
  <img src="${details.image}" style="min-width: 20rem; max-width: 50rem; " class="img-fluid rounded-start " alt="Museum">
</div>
<div class="col-md-8 p-5">
  <div class="card-body">
    <h5 class="card-title text-white fs-3"> ${details.name}</h5>
    <p class="card-text text-white text-white fs-5"><small class="text-black"> ${details.date}</small> 2021-11-02 </p>
    <p class="card-text text-white"> ${details.description}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Place</small> ${details.place}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Capacity</small> ${details.capacity}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Assistance</small> ${details.assistance}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Price</small> ${details.price}</p>
  </div> </div>`