function validateForm(){
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let phoneNumber = document.forms["myForm"]["phone"].value;

    if(firstName ==""){
        alert("First Name Must Be Filled Out");
        return false;
    }
    if (lastName ==""){
        alert("Last Name Must Be Filled Out");
        return false; 
    }
    if (phoneNumber ==""){
        alert("Phone Number Must Be Filled Out");
        return false; 
    }
}