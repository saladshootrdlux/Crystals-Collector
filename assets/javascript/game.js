
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue-crystal.jpg", "./assets/images/purple-crystal.jpg", "./assets/images/red-crystal.jpg", "./assets/images/yellow-crystal.jpg"];


function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);
    }
}

function resetHTML () {
    $(".target-number").html(targetNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
}

function totalReset () {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}


randomTargetNumber();
resetHTML ();
resetCrystals ();


function crystalClick () {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".crystal", crystalClick);














// BELOW IS COMMENTED OUT CODE FROM THE CRYSTALS GAME FOR REFERENCE ONLY
// var targetNumber = 53;

// $("#number-to-guess").text(targetNumber);

// function random100() {
//     var x = document.getElementById("demo")
//     x.innerHTML = Math.floor((Math.random() * 100) + 1);
// }

// var counter = 0;
// var numberOptions = [10, 5, 3, 7];

// // For loop to create crystals for every numberOption.
// for (var i = 0; i < numberOptions.length; i++) {

//   var imageCrystal = $("<img>");

//   imageCrystal.addClass("crystal-image");

//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//   $("#crystals").append(imageCrystal);
// }


// $(".crystal-image").on("click", function() {

//   var crystalValue = ($(this).attr("data-crystalvalue"));
//   crystalValue = parseInt(crystalValue);
//   counter += crystalValue;

//   alert("New score: " + counter);

//   if (counter === targetNumber) {
//     alert("You win!");
//   }

//   else if (counter >= targetNumber) {
//     alert("You lose!!");
//   }

// });
