// Global variables
var changeX = 2;
var changeY = 2;
var posX = 300;
var posY = 300;
var intervalID = 0;
var maxWidth = window.innerWidth - 500;
var maxHeight = window.innerHeight - 500;

function intervalStart() {
    // Get the image element
    var image = document.getElementById("cat");

    // Disable start button, enable stop button
    document.getElementById("goButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    // Start moving the image
    intervalID = setInterval(function() {
        posX += changeX;
        posY += changeY;

        // Bounce off the walls (used a video reference)
        if (posX <= 0 || posX >= maxWidth) {
            changeX = -changeX;
        }
        if (posY <= 0 || posY >= maxHeight) {
            changeY = -changeY;
        }

        image.style.left = posX + "px";
        image.style.top = posY + "px";
    }, 20); // Repeat every 20ms
}

function intervalStop() {
    // Enable start button, disable stop button
    document.getElementById("goButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    
    // Stop the movement
    clearInterval(intervalID);
}
