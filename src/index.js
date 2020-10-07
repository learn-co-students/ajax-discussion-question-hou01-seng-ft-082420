
fetch('https://randomuser.me/api/')
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
  const first = json['results'][0].name.first
  const title = json['results'][0].name.title
  const last = json['results'][0].name.last
  const fullNameStr =  (`${title}. ${first} ${last}`)
  console.log(fullNameStr)
});

const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  
});



      // fetch('https://randomuser.me/api/')
      // .then(function(response) {
      //   return response.json();
      // }).then(function(json) {
      //   console.log(json);
      //   // console.log(`Last Name:${json['results'][0].name.last}`);
      //   // console.log(last)
      // });

      // fetch('https://randomuser.me/api/')
      // .then(function(response) {
      //   return response.json();
      // }).then(function(json) {
      //   console.log(json);
      //   // console.log(`Title:${json['results'][0].name.title}`);
      //   let title = json['results'][0].name.title
      //   // console.log(title)
      // });


  