
let car={
   make:"Dodge ",
   model: "Viper ",
   year:"2021",
   color:"red",
   description: function() {
     
     return this.year;
   }
 };
 document.getElementById("myObject").innerHTML=car.description();