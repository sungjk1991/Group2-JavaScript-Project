const movingImage = document.getElementById('movingImages');
let currentPosition = 0;
const speed = 2;

function moveImage(){
    currentPosition +=speed;

    movingImage.style.top = currentPosition + "px";

    if (currentPosition >= window.innerHeight - movingImage.height) {
        clearInterval(animationInterval);

    }
}

const animationInterval = setInterval(moveImage, 10);

function duplicateDivs(){
    const originalDiv = document.getElementById("movingImages");
// Create a new div element
const duplicatedDiv = originalDiv.cloneNode(true);
// Add a class to the duplicated div to differentiate it
duplicatedDiv.classList.add("duplicatedDiv");
// Set a new position for the duplicated div
const newPositionTop =  Math.random() * (window.innerHeight - 100); // Adjust the range as needed
const newPositionLeft = Math.random() * (window.innerWidth - 100); // Adjust the range as needed
duplicatedDiv.style.top = newPositionTop + "px";
duplicatedDiv.style.left = newPositionLeft + "px";
// Append the duplicated div to the body
document.body.appendChild(duplicatedDiv);
}

for (let i=0; i<50; i++){
    duplicateDivs();
}