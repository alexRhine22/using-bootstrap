let headerDate = document.getElementById("header-date");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var date = new Date();

let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();
let dayName = daysOfWeek[date.getDay()];

let currentDate = dayName + ", " + month + " " + day + ", " + year;
window.addEventListener("load", (e) => {
  headerDate.innerHTML = currentDate;
});
