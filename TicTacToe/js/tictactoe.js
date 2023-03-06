//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to detramine win contition.
let selectedSquares = [];

//This function is placing an x or an o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retireves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition check who's turn it is.
        if (activePlayer === 'X') {
            //If activeplayer is equal to 'X' the x.png is placed in HTML
            select.style.backgroundImage = 'url("file:///C:/Users/amy/Documents/JavaScript_Projects/TicTacToe/images/x.png")';
            //Active player may only be 'X' or 'O' so if not x it must be o
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("file:///C:/Users/amy/Documents/JavaScript_Projects/TicTacToe/images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This conditon is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
            //if the activePlayer is anything other than 'X'
        } else {
            //Change the active Player to 'X'            
            activePlayer = 'X';
        }
        //This  function plays placement sound
        audio('./media/place.mp3');
        //This contidion check to see if is the computers turn.
        if (activePlayer === 'O') {
            //This function disables click for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function result in a random square being slected by the computer. 
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is select already.
        while (!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, th square hasnt been selected yet.
            if (placeXOrO(pickASquare)) {
                //this line call the function
                placeXOrO(pickASquare);
                //This change our boolean toand end the loop
                success = true;
            }; //Why the semi colon???
        }
    }
}

//This function parses the seclectSquares arrayto search for win conditions.
//drawLine() function is coalled to draw a line on the screen if the condition is met.
function checkWinConditions() {
    //x 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //x3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X6,X7,X8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 304, 558, 508) }
    //X0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X1,4,7
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    ///x 0,1,2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //x3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //X6,X7,X8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //X0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //X1,4,7
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //X2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //X6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //X0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //This function checks if an array includes 3 string. It is used to check for
    //each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all include in our array then
        //true is returned and our else if conditions executes the drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This make our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable adain after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound;
    audio.play();
}

//This function utilitzes HTML canvas to draw lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives us access to method and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the stat of a lines x axis is.
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of a lines x axis is
        y2 = coordY2,
        //THis variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;
    //This function interacts with the canvas.
    function animateLineDrawing() {
        //This variable create a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears contenet from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //This method start a new path.
        c.beginPath();
        //This method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        //This method indicates the end point in our line.
        c.lineTo(x, y);
        //This method sets the width of our line.
        c.lineWidth = 10;
        //This method set the color of our line.
        c.strokeStyle = 'rgba(70,255,33,.8)';
        //This method draw everything we liad out above.
        c.stroke();
        //This condition checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the previous end x point.
            if (x < x2) { x += 10; }
            //This condition adds 10 to the previous end y endpoint.
            if (y < y2) { y += 10; }
            //This condition is similar to the one above.
            //This is necessary for the 6,4,2 wub conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above.
        //This is necessary for the 6,4,2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //This function clears our canvas after our win line is drawn.
    function clear() {
        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //THis line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //This line plays the win sounds.
    audio('./media/winGame.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //This line waits 1 second. Then, clear canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or a win
function resetGame() {
    //THis for loop iterates through each HTML element i.
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i
        let square = document.getElementById(String(i));
        //THis removes or elements backgroundImage
        square.style.backgroundImage = '';
    }
    //This resets or array so it is emapty and we can start over.
    selectedSquares = [];
}
