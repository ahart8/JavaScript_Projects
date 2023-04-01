//TERNARY OPERATORS
function voteFunction(){
   var voterAge,canVote;
   voterAge=document.getElementById("age").value;
   canVote=(voterAge<21) ? "You are not old enough":"You are old enough";
   document.getElementById("vote").innerHTML=canVote;
}

//CONSTRUCTOR FUNCTION USING NEW AND THIS
function Dog(Name,Breed,Age,Owner){
   this.dogName=Name;
   this.dogBreed=Breed;
   this.dogAge=Age;
   this.dogOwner=Owner;
}
   var Piper=new Dog("Piper","Boston Terrier",3,"Amy Hart"); //The new keyword creates the objec
   function myFunction(){
    document.getElementById("dogs").innerHTML="Name: "+Piper.dogName + " Breed: "+Piper.dogBreed+ " Age: " +
    Piper.dogAge + " Owner: "+ Piper.dogOwner;

   }
//NESTED FUNCTION CONCATENATES FIRST AND LAST NAME   
   function fullName_Function(){ //Outer parent function
       
      function FullName() //Child function calls firstname and last name function - returns a conatenated string
      {
       
      var first=FirstName();
      var last=LastName();
      return first+" "+last;
      }

      function FirstName(){ //Child function sets and returns the value of the first name
      var fname="Amy";
      return fname;
      }   

      function LastName(){//Child function sets and returns the value of the last name
      var lname="Hart"; 
      return lname; 
      }
    document.getElementById("name").innerHTML=FullName(); //This is what makes the full name display in the html page.
   }

      
      


  
