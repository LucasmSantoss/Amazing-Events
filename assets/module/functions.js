export function allCards(events) {
    
     return `<div class="card p-3 m-1 bg-dark" style="width: 18rem">
    <img
      src= ${events.image}
      class="card-img-top"
      style="height: 10rem"
      alt="cine"
    />
    <div class="card-body d-flex flex-column justify-content-around">
            <h5 class="card-title text-white fs-4">${events.name}</h5>
            <p class="card-text text-white fs-5"> ${events.date} </p>
            <p class="card-text text-white fs-5">
              ${events.description}
            </p>
            <p class="card-text text-white fs-5"> Price: $${events.price} </p>
            <a href="../assets/details.html?id=${events._id}&name=${events.name}" class="btn bg-dark-subtle d-flex justify-content-end " style="width: 4.5rem;"
              >Details</a
            >
          </div>
    </div>`;
      
    }
  
  export function addCard(events, cards ){
   let boxCards = "";
  for(let event of events){
    boxCards += allCards(event);
  }
  cards.innerHTML = boxCards;
  }

  export function addCardUpcomingDate(events, currentDate, isUpcoming  , cards){
      let currentEvents = "";
      
      for(let event of events){
        if (event.date > currentDate && isUpcoming){
          currentEvents += allCards(event)
        } else if (event.date < currentDate && !isUpcoming){
          currentEvents += allCards(event)
        }
        cards.innerHTML = currentEvents;
      }
  }
  
 

export function addDetailsCard(events, cards){
  
  cards.innerHTML = detailsCard(events);
  }

export function detailsCard (event){
  return `<div class="row g-1 p">
<div class="col-md-4 d-flex justify-content-center align-items-center p-4">
  <img src="${event.image}" style="min-width: 20rem; max-width: 50rem; " class="img-fluid rounded-start " alt="Museum">
</div>
<div class="col-md-8 p-3">
  <div class="card-body">
    <h5 class="card-title text-white fs-3"> ${event.name}</h5>
    <p class="card-text text-white text-white fs-5"><small class="text-black"> ${event.date}</small> 2021-11-02 </p>
    <p class="card-text text-white fs-5"> ${event.description}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Place</small> ${event.place}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Capacity</small> ${event.capacity}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Assistance | Estimate</small> </p>
    <p class="card-text text-white fs-5"><small class="text-black">Price</small> ${event.price}</p>
  </div> </div>`
}


  export function errorMessage () {
    return `<div class="error m-auto"> <p class="text-center fs-3"> No events found</p> 
    <img src="./imgs/error.png" alt="error"> </div>;`;
  }

  export function addCheckbox (category, checks){
    let checkBoxDiv = "";
    for(let categories of category ) {
      checkBoxDiv += createCheckbox(categories)
    }
    checks.innerHTML = checkBoxDiv;
  }
  
  
  export function createCheckbox(check) {
    return `<div class="input-group-text m-2" style="border-style: none;" >
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
  
  
  export function categoryFilter(event) {
    let inputFilter = [...document.querySelectorAll('input[type="checkbox"]:checked')].map((element) => element.value);
    if (inputFilter.length === 0) {
      return event;
    }
    return event.filter((filters) => inputFilter.includes(filters.category));
  }
  
  export function filterSearch(search, e) {
    let arrayFilter = e.filter((searchFilter) => searchFilter.name.toLowerCase().includes(search));
    return arrayFilter;
  }

  ///// STATS ////////////


  export function table (events) {
    return  `<div
        class="d-flex justify-content-center m-auto"
        style="width: 70%;"
       >
        <table class="table table-bordered border-primary m-3 bg-white" >
           <thead>
            <tr>
              <th colspan="12" class="fs-4">Events statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fs-5" >
                ${events.name}
              </td>
              <td class="fs-5">
                Events with the lowest percentage of attendance
              </td>
              <td class="fs-5">Event with larger capacity</td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <thead>
              <tr>
                <th colspan="12" class="fs-4">
                  Upcoming Events stadistics by Category
                </th>
              </tr>
            </thead>
          </tbody>

          <tbody>
            <tr>
              <td class="fs-5">Categories</td>
              <td class="fs-5">Renevues</td>
              <td class="fs-5">Percentage of attendance</td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <thead>
              <tr>
                <th colspan="12" class="fs-4">
                  Past Events statistics by Category
                </th>
              </tr>
            </thead>
          </tbody>

          <tbody>
            <tr>
              <td class="fs-5">Category</td>
              <td class="fs-5">Renevues</td>
              <td class="fs-5">Percentage of attendance</td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
            <tr>
              <td class="p-3"></td>
              <td class="p-3"></td>
              <td class="p-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
  ` }

  export function addTable(events, cards ){
    let boxCards = "";
    
    boxCards += table(events);
   cards.innerHTML = boxCards;
 }


