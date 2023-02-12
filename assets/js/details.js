
import {addDetailsCard , detailsCard, addCard} from "../module/functions.js"
const $container = document.getElementById( "detailsCard" );

const params = new URLSearchParams( location.search );
const id = params.get( "id" ); 
const details = data.events.find( (card) =>  card._id == id);
// const nombre = params.get( "name" ); 
// const aux = details.name;
// document.title =  `${aux} Details`; 


fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      addDetailsCard(data.events , $container )
      }
      );

