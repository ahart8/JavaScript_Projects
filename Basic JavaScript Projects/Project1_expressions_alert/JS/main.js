
//WRITE AN EXPRESSION
window.alert(4+4 +" "+"Is my lucky number"); //This is a statement containing an expression.

//CONCATENATE 2 SENTANCES AND DISPLAY ON SCREEN
function concatTwoStrings(){
    var sent1="This is the beginning of the string" + " ";//I am assigning sent1 a value. 
    var sent2="and his is the end of the string.";//I am assigning sent2 a value
    result=sent1.concat(sent2);//Make the varialbe result have the value of the concatenated variables
    document.getElementById("paragraphText").innerHTML=result;//Set paragraph text to be the value stored in the result variable and add it to the HTML
}