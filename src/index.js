const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

console.log("Hello")

function fetchData() {
  let data = fetch('https://raw.githubusercontent.com/denimcouch/ajax-discussion-question-hou01-seng-ft-082420/master/src/index.html')
    .then( res => res.json() )
    .then( json => console.log(json) )
}
fetchData()
// console.log("Sup?")