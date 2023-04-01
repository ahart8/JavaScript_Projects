
//This code is a series of functions that display on an HTML Page
//The button click is the event that triggers the paragraphs to 
//disply the results of the functions

function additionFunction() {//Define the function
    var addnumbers = 5 + 5;//Create a variable
    document.getElementById("Math").innerHTML = "5+5=" + addnumbers;//Set the HTML element to the value of the variable.
}

function subtractionFunction() {//Define the function
    var subtractnumbers = 10 - 5;//Create a variable
    document.getElementById("Subtract").innerHTML = "10-5=" + subtractnumbers;//Set the HTML element to the value of the variable.
}

function multiplyFunction() {//Define the function
    var mutltiplynumbers = 10 * 5;
    document.getElementById("Multiply").innerHTML = "10*5=" + mutltiplynumbers;//Set the HTML element to the value of the variable.
}

function divideFunction() {//Define the function
    var dividenumbers = 10 / 5;//Create a variable
    document.getElementById("Divide").innerHTML = "10/5=" + dividenumbers; //Set the HTML element to the value of the variable.
}

function multiMath() {//Define the function
    var multimath = (5 + 5) * 3 / 4 - 1;//Create a variable
    document.getElementById("Multi").innerHTML = "5+5 times 3 dividide by 4-1 =" + multimath;//Set the HTML element to the value of the variable.
}

function modulusFunction() {//Define the function
    var modulusmath = 27 % 2;//Create a variable using modulus
    document.getElementById("Mod").innerHTML = "27 % 2 =" + modulusmath;//Set the HTML element to the value of the variable.
}

function negationFunction() {//Define the function
    var x = 11;//Create a variable
    document.getElementById("Negation").innerHTML = -x;//Set the HTML element to the value of the variable.
}

function incrementFunction() {
    var x = 5;
    x++;//Increment the variable
    document.getElementById("Increment").innerHTML = x;//Set the HTML element to the value of the variable.
}

function decrementFunction() {
    var x = 5;//Create the varialbe.
    x--;//Decrement the variable.
    document.getElementById("Decrement").innerHTML = x; //Set the HTML element to the value of the variable.
}

function randomNumber() {//Define the function
    document.getElementById("Random").innerHTML = Math.random() * 100;//Set the HTML element to the value of the variable.
}