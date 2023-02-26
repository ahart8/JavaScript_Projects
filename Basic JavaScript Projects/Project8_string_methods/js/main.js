//CONCATENATE METHOD
function concatMethod() {
   var pop = "Pop ";
   var goes = "goes ";
   var the = "the ";
   var weasel = "weasel!";
   
   var sentance = pop.concat(goes, the, weasel);
   
   document.getElementById("string").innerHTML = sentance;
   document.getElementById("image").style.display = "block";
}

//SLICE METHOD
function sliceMethod() {
   var lyric = "I love rock and roll.";
 
   
   var slice = lyric.slice(7, 20); //This tels the computer to keep the piece of the string that is from character 7 thru character 20.
   document.getElementById("sliced").innerHTML = slice;
}
//TO UPPERCASE METHOD
function toUpperCaseMethod() {
   var x = document.getElementById("inputtext").value;
   var reply = x.toUpperCase();
   document.getElementById("displaytext").innerHTML = reply;

   function clearText(){
      if (inputtext.value != "") { //clear out the input field after somenone enters text.
         inputtext.value = "";
      }
   }
   clearText();
}

//SEARCH METHOD
function searchMethod() {
var searchText = "I love Rock and Roll"
   
  var letter = document.getElementById("input").value;
   var position = searchText.search(letter);
   document.getElementById("showText").innerHTML = position;
   
   function clear(){
      if (input.value != "") { //clear out the input field after somenone enters text.
         input.value = "";
      }
   }
   clear(); 
   }

//TOSTRING METHOD
function toStringMethod() {
   
   var number = document.getElementById("entered").value;
   if (entered.value != "") { 
      entered.value = "";
   }
   document.getElementById("returned").innerHTML = number.toString();
}

//TOPRECISION METHOD
function toPrecisionMethod(){
var num=88.88888;
document.getElementById("precision").innerHTML = num.toPrecision(2);
}