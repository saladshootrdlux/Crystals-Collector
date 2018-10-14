
// This section is used to set the initial values within the scorebox.

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;

// This is the array of crystal images which will be pulled and populated during the resetCrystals function.

var images = ["./assets/images/blue-crystal.png", "./assets/images/purple-crystal.png", "./assets/images/red-crystal.png", "./assets/images/yellow-crystal.png"];

// This function sets the initial target number for the user to match using crystals.

function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 55) + 32;
}

// This function creates the Crystal images, sets their class, grabs images from assets/images, sets randomized values to each, sets size limit, and places them in index.html.

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "300");
        $(".crystal-images").append(crystal);
    }
}

// This function resets the HTML counter.

function resetHTML () {
    $(".target-number").html(targetNumber);
    $(".win-counter").html("<p>Wins: " + wins + "</p>");
    $(".lose-counter").html("<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
}

// This combines the resets and sets a new target number when triggered.

function fullReset () {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}

// All resets are triggered during the initial page load to prepare for the first game.

randomTargetNumber();
resetHTML ();
resetCrystals ();

// These functions are responsible for the actual game mechanics and control what happens when crystals are clicked.
// If the user matches the number, an alert is raised "You win!".
// If the user goes over the target numer, an alert is raised "You lose!".


function crystalClick () {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == targetNumber) {
        wins++;
        alert("You win!");
        fullReset();
    }
    else if (counter > targetNumber) {
        losses++;
        alert("You lose!");
        fullReset();
    };
};

// This is the global event listener which is listening for mouse clicks on crystals.

$(document).on("click", ".crystal", crystalClick);
