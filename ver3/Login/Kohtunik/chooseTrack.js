const leftArrowButton = document.getElementById("left-arrow");
const rightArrowButton = document.getElementById("right-arrow");
const numberDisplay = document.getElementById("numberDisplay");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

let currentNumber = 1;

function updateNumberDisplay () {
    numberDisplay.textContent = currentNumber;
}

leftArrowButton.addEventListener("click", function(){
    currentNumber--;
    
    if (currentNumber < 1) {
        currentNumber = 1;
    }
    
    updateNumberDisplay();
});

rightArrowButton.addEventListener("click", function() {
    currentNumber++;

    // admin peaks saama muutma mitu rada valikus on.

    if (currentNumber > 6) {
        currentNumber = 6;
    }
    updateNumberDisplay();
})

backButton.addEventListener("click", function() {
    history.back();
})

nextButton.addEventListener("click", function() {
    window.location.href = "pointPage/points.html";
})
