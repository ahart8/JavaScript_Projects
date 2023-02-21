

//Create a dictionary and set an HTML element to a value in the dictionary
function myFirstDictionary() {
    var RockBands = {
        Name: "The Beatles",
        Album: "Abby Road",
        RythmGuitar: "John Lennon",
        BassGuitar: "Paul McCartney",
        LeadGuitar: "George Harrison",
        Drums: "Ringo Star"


    };
    delete RockBands.Album; //Remove the key before it id displayed
    document.getElementById("Dictionary").innerHTML = RockBands.Album;
}

let counter = 0;

function addFive() {
    counter += 5
    console.log(counter)
}

function addTwo() {
    counter += 2
    console.log(counter)
}

addFive(counter);// what will this show in the console?
addTwo(counter);// what will this show in the console?