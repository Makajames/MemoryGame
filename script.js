const gameContainer = document.getElementById("game");

// const cardColor = document.querySelector('#game.""');


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
};
// modified before looking into chatGPT
// TODO: Implement this function!
// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   // console.log("you just clicked", event.target);
//   const squareColor = event.target;
//   console.log (event.target);
//   const colorFlip = squareColor.classList[0];
//   // console.log(colorFlip);
//   console.log(squareColor.style.backgroundColor);
//   function flipCard(){
//     squareColor.style.backgroundColor = colorFlip;
//   }
//   flipCard();
// }

// function flipCard(element){
//        element.style.backgroundColor = element.classList[0];
//      }

let firstCard = "";
let secondCard = "";
let matches = 0;


function handleCardClick(event) {
  const clickedCard = event.target;

  if (clickedCard === firstCard || clickedCard === secondCard || (firstCard && secondCard)) {
    return;
  }

  flip(clickedCard);

  if (!firstCard) {
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;

    // Check if the colors match
    if (firstCard.classList[0] !== secondCard.classList[0]) {
      setTimeout(function() {
        flip(firstCard);
        flip(secondCard);
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        firstCard = "";
        secondCard = "";
      }, 1000);
    } else {
      firstCard = "";
      secondCard = "";
      matches ++;
    }
  }
  if (matches === 5){
    alert ('All possible matches complete!');
  }
}

let resetbtn = document.querySelector('button');
function restart(event){
  const restart = resetbtn;
  console.log('reset clicked');
};

function flip(card) {
  const colorClass = card.classList[0];
  card.style.backgroundColor = colorClass;
}

// when the DOM loads
createDivsForColors(shuffledColors);
