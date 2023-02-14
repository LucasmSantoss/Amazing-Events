import {dataApi, addTable, getEventWithLargestCapacity,getHighestAttendancePercentage, getLowestAttendancePercentage} from "../module/functions.js"

const $table = document.getElementById("table")

const data = dataApi();

data.then((response) => {
    addTable(response.events, $table )
    getEventWithLargestCapacity(response.events)
    getHighestAttendancePercentage(response.events)
    getLowestAttendancePercentage(response.events)
}).catch((error) => {
    console.log(error)
})
