//This function gets input from HTML
//It then checks the input to see if it is lessthan 18
//If it is less than - You are not old enough displays
//Otherwise -You are old enough displays

function voteFunction(){
var voterAge, canVote;
voterAge=document.getElementById("age").value;
canVote=(voterAge<18) ? "You are not old enough":"You are old enough";//Check the age -display message accordingly
document.getElementById("vote").innerHTML=canVote;
}
