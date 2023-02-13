import {table, addTable} from "../module/functions.js"



const $table = document.getElementById("table")

console.log($table)

const dataApi = await fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .catch(err => console.log(err));

console.log(dataApi)

addTable( dataApi.events ,$table)


