
//THIS IS WRITING DIRECTLY OUT TO THE HTML FILE
document.write(typeof("Amy"));

//THIS FUNCTION IS USING AN EXPRESSION
function expressionFunction(){
    var x="8"+8; //"8"+8 is an expression
    document.getElementById("expression").innerHTML=x;
}


//THIS FUNCTION IS CHECKING TO SEE IF THE DATA ON THE RIGHT SIDE OF THE 
//SYMBOL IS EQUAL TO THE LEFT
function doubleEqualFunction(){
    var x=(7+1)==8;
    document.getElementById("doubleequal").innerHTML=x;
}

//THIS FUNCTION CHECKS FOR VAUE AND DATA TYPE TO BE EQUAL AND RETURNS FALSE

function trippleEqualFunction(){
    var x="8"===8;
    document.getElementById("trippleequal").innerHTML=x;
}

//THIS FUNCTION CHECKS TO SEE IF ONE VALUE IS GREATER THAN ANOTHER
function greaterThanFunction(){
    var x=9>8;
    document.getElementById("greaterthan").innerHTML=x;
}

//THIS FUNCTION CHECKS TO SEE IF ONE VALUE IS LESS THAN ANOTHER
function lessThanFunction(){
    var x=9<8;
    document.getElementById("lessthan").innerHTML=x;
}

//THIS FUNCTION DOES A COMPARISON USING "AND" LOGIC
function andFunction(){
    var x=(8<9 && 8>7);
    document.getElementById("and").innerHTML=x;
}

//THIS FUNCTION DOES A COMPARISON USING "OR" LOGIC
function orFunction(){
    var x=(8<9 || 8<7);//Only one needs to be true to result true
    document.getElementById("or").innerHTML=x;
}

//THIS FUNCTION DOES A COMPARISON USING "NOT" LOGIC
function notFunction(){
    var x= !(8<9 || 8<7);//The not produces the opposite result of what is evaluated in the parenthesis
    document.getElementById("not").innerHTML=x;
}

   
