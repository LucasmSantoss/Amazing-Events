
import {addDetailsCard } from "../module/functions.js"
const $container = document.getElementById( "detailsCard" );

const params = new URLSearchParams( location.search );
const id = params.get( "id" ); 

const nombre = params.get( "name" ); 
document.title =  `${nombre} Details`; 


fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .then(data => {
      addDetailsCard(data.events.find( (card) =>  card._id == id), $container )
      }
      );

