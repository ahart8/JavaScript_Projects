

//CONCATENATE 2 SENTANCES AND DISPLAY ON SCREEN
function concatTwoStrings(){
    var sentance="Boston Terrier";
    sentance += " Rescue of Florida. 7 dogs saved so far!"; //I used += to concatenate this string
    document.getElementById("greeting").innerHTML=sentance;//Set the HTML paragraph text to be the concatenated sentance 
}

//THIS FUNCTION CHANGES TEXT WHEN IT IS CLICKED
function changeText(){ //Define the function that accesses the element id with the onclick even that calls this function.
    document.getElementById("mytext").innerHTML=mytext; //The innerHTML is the contents between the brackets of the element. Change Click Me!
    mytext.innerHTML="You Clicked here";//New Text
    mytext.style.color="rgb(38, 73, 107)";
}

function setNewImage(){
  
  document.getElementById("img1").src="1.jpg";
}

function setOldImage(){

}