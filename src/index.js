const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let b = document.querySelector(".btn-primary")
  b.addEventListener("click", function(){
    fetch('https://randomuser.me/api/')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      for(let i = 0; i < json.results.length; i++) {
        let li = document.createElement("li")
        li.innerText = json.results[i].name.first
        document.body.append(li)
      }
    })
  });

  })

