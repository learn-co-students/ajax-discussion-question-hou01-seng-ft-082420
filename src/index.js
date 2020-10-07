const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const collection = document.getElementsByTagName("button")
const button = collection[0]
console.log(button)

button.addEventListener("click",  function fetchData() {
  let data = fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( console.log )
})

