//Write a function that uses global and local variables. Make it error. Display the output in the console;
//To see this code run inspect the code in the console.
function firstName(){
   var fname="Amy";//If this variable is moved about the function firstName() it will be global and will not cause the error.
   console.log(fname);
}
function lastName(){
   var lname="Hart";
   var names=fname +lname;//This function is failing because the variable fname is not global. 
   console.log(names);
}
function Add_Names(){
   firstName();
   lastName();
 }


//THIS FUNCTIONS USES A RANDOM METHOD TO GENERATE A NUMBER
//CONDITIONAL LOGIC IS USED TO DETERMINE IF THE NUMBER IS GREATER THAN OR LESS THAN 0
function randomFunction()
{
   var x=Math.random()*100;
   if (x>0){
      document.getElementById("if").innerHTML="Your number is "+x+" greater than 0. You win!";    
   }
  else if (x<0){
   document.getElementById("if").innerHTML="Your number is "+x+" less than than 0. You loose!"; 
  }
}

//ElSE If STATEMENTS ARE USED TO 
//DETERMINE IF THE TIME IS MORNING
//AFTERNOON OR EVENING
function Time_Function(){
 
  var Time =new Date().getHours();
   var Reply;
   if (Time < 12 == Time > 0){
      Reply="It's morning time!";       
   }
   else if (Time >= 12 == Time < 18){
     Reply="It's afternoon time.";        
   }
   else{
      Reply="It's evening time.";
    }
    console.log(Reply); 
    document.getElementById("Time_of_Day").innerHTML=Reply;
}