

//Create a dictionary and set an HTML element to a value in the dictionary
function myFirstDictionary(){ 
    var RockBands={
        Name:"The Beatles",
        Album:"Abby Road",
        RythmGuitar:"John Lennon",
        BassGuitar:"Paul McCartney",
        LeadGuitar:"George Harrison",
        Drums:"Ringo Star"
        

    };
    delete RockBands.Album; //Remove the key before it id displayed
    document.getElementById("Dictionary").innerHTML=RockBands.Album;
}