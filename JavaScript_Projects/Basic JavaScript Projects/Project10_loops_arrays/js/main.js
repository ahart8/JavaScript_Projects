//THIS FUNCTION USES A WHILE LOOP
function callLoop() {
  var digit = "";
  let x = 1;

  while (x < 10) {

    digit += "<br>" + x;
    x++;
  }
  document.getElementById("loop").innerHTML = digit;
}
//END FUNCTION


//THIS FUNCTION USES A FOR LOOP 
var bands = ["Smashing Pumpkins", "Stone Temple Pilots", "Sound Garden", "Red Hot Chili Peppers", "Alice In Chains"];
var list = "";
var counter;

function forLoop() {
  for (counter = 0; counter < bands.length; counter++) {
    list += bands[counter] + "<br>";
  }
  document.getElementById("myList").innerHTML = list;
}
//END FUNCTION

//THIS FUNCTION USES AN ARRAY
function arrayFunction() {
  var floridaNativePlants = [];

  floridaNativePlants[0] = "American Beautyberry";
  floridaNativePlants[1] = "Firebush";
  floridaNativePlants[2] = "Coral Honeysuckle";
  floridaNativePlants[3] = "Carloina Jasmine";
  floridaNativePlants[4] = "Passion Flower";
  floridaNativePlants[5] = "Swamp Lilly";


  document.getElementById("myArray").innerHTML = floridaNativePlants[3];
}
//END


function returnFunction() {
  document.getElementById("myReturn").innerHTML = "Amy Hart";
}
let user = {

  firstName: "Amy",
  lastName: "Hart",
  username: "ahart",
  pwd: "test",

  getFullName: function () {

    return this.firstName + " " + this.lastName
  }

};
document.getElementById("myObject").innerHTML=user.getFullName();





