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

export function addCard(events, cards) {
  let boxCards = "";
  for (let event of events) {
    boxCards += allCards(event);
  }
  cards.innerHTML = boxCards;
}

export function addDetailsCard(events, cards) {
  cards.innerHTML = detailsCard(events);
}

export function detailsCard(event) {
  return `<div class="row g-1 p">
<div class="col-md-4 d-flex justify-content-center align-items-center p-4">
  <img src="${
    event.image
  }" style="min-width: 20rem; max-width: 50rem; " class="img-fluid rounded-start " alt="Museum">
</div>
<div class="col-md-8 p-3">
  <div class="card-body">
    <h5 class="card-title text-white fs-3"> ${event.name}</h5>
    <p class="card-text text-white text-white fs-5"><small class="text-black"> ${
      event.date
    }</small> 2021-11-02 </p>
    <p class="card-text text-white fs-5"> ${event.description}</p>
    <p class="card-text text-white fs-5"><small class="text-black">Place</small> ${
      event.place
    }</p>
    <p class="card-text text-white fs-5"><small class="text-black">Capacity</small> ${
      event.capacity
    }</p>
    <p class="card-text text-white fs-5"><small class="text-black"></small>${estimateAsistence(
      event
    )} </p>
    <p class="card-text text-white fs-5"><small class="text-black">Price</small> ${
      event.price
    }</p>
  </div> </div>`;
}

function estimateAsistence(contain) {
  let shows = "";
  let assistance = "Assistance";
  let estimate = "Estimate";
  if (contain.assistance) {
    shows = assistance + " " + contain.assistance;
  } else if (contain.estimate) {
    shows = estimate + " " + contain.estimate;
  }
  return shows;
}

export function errorMessage() {
  if (document.title === "Home") {
    return `<div class="error m-auto"> <p class="text-center fs-3"> No events found</p> 
      <img src="./assets/imgs/error.png" alt="error"> </div>;`;
  }
  return `<div class="error m-auto"> <p class="text-center fs-3"> No events found</p> 
    <img src="./imgs/error.png" alt="error"> </div>;`;
}

export function printError(card, error) {
  if (card.length === 0) {
    error.innerHTML = errorMessage();
  } else {
    return addCard(card, error);
  }
}

export function addCheckbox(category, checks) {
  let checkBoxDiv = "";
  for (let categories of category) {
    checkBoxDiv += createCheckbox(categories);
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

export function cardsFilterPast(events, pastDate) {
  let pastEvents = [];
  for (let event of events) {
    if (pastDate < event.date) {
      pastEvents.push(event);
    }
  }
  return pastEvents;
}

export function cardFilterUpcoming(events, upComingDate) {
  let upComingEvents = [];
  for (let event of events) {
    if (upComingDate > event.date) {
      upComingEvents.push(event);
    }
  }
  return upComingEvents;
}

export function categoryFilter(event) {
  let inputFilter = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((element) => element.value);
  if (inputFilter.length === 0) {
    return event;
  }
  return event.filter((filters) => inputFilter.includes(filters.category));
}

export function filterSearch(search, e) {
  let arrayFilter = e.filter((searchFilter) =>
    searchFilter.name.toLowerCase().includes(search)
  );
  return arrayFilter;
}

/////// STATS ////////////



export function filterUpcoming(events, date) {
  let upcomingFilter = []
  for (let event of events) {
      if (date < event.date) {
          upcomingFilter.push(event)
      }
  }
  return upcomingFilter
}

export function filterPast(events, date) {
  let pastEvents = []
  for (let event of events) {
      if (date > event.date) {
          pastEvents.push(event)
      }
  }
  return pastEvents
}

export function maxAttendance(events) {
  let highest = 0
  let highestEvent
  for (let event of events) {
      let percentageOfAttendance = (event.assistance * 100) / event.capacity
      if (highest === 0 || percentageOfAttendance > highest) {
          highest = percentageOfAttendance
          highestEvent = event
      }
  }
  return highestEvent
}

export function lowAttendance(events) {
  let lowest = 0
  let lowestEvent
  for (let event of events) {
      let percentageOfAttendance = (event.assistance * 100) / event.capacity
      if (lowest === 0 || percentageOfAttendance < lowest) {
          lowest = percentageOfAttendance
          lowestEvent = event
      }
  }
  return lowestEvent;
}

export function maxCapacity(events) {
  let larger = 0;
  let largerCapacityEvent;
  for (let event of events) {
      if (larger === 0 || event.capacity > larger) {
          larger = event.capacity
          largerCapacityEvent = event
      }
  }
  return largerCapacityEvent;
}

export function upcomingEventsStatistics(events) {
  let upcomingStatistics = []; 
  let upcomingCategories = Array.from(new Set(events.map(event => event.category)))


  let upcomingRevenues = [];
  for (let category of upcomingCategories) {
      let cont = 0;
      for (let event of events) {
          if (event.category === category) {
            cont += event.estimate * event.price
          }
      }
      upcomingRevenues.push(cont);
  }


  let upcomingAttendance = [];
  for (let category of upcomingCategories) {
      let estimateAttendance = 0;
      let capacity = 0;
      for (let event of events) {
          if (event.category === category) {
              estimateAttendance += event.estimate
              capacity += event.capacity
          }
      }
      upcomingAttendance.push((estimateAttendance * 100) / capacity)
  }


  upcomingStatistics.push(upcomingCategories, upcomingRevenues, upcomingAttendance)
  return upcomingStatistics;
}


export function pastEventsStatistics(events) {
  let pastStatistics = [];
  let pastCategories = Array.from(new Set(events.map(event => event.category))) 


  let pastRevenues = [];
  for (let category of pastCategories) {
      let revenueCont = 0
      for (let event of events) {
          if (event.category === category) {
              revenueCont += event.assistance * event.price
          }
      }
      pastRevenues.push(revenueCont);
  }


  let pastPercentageOfAttendance = []; 
  for (let category of pastCategories) {
      let assistance = 0;
      let capacity = 0;
      for (let event of events) {
          if (event.category === category) {
              assistance += event.assistance
              capacity += event.capacity
          }
      }
      pastPercentageOfAttendance.push((assistance * 100) / capacity);
  }


  pastStatistics.push(pastCategories, pastRevenues, pastPercentageOfAttendance)
  return pastStatistics;
}


