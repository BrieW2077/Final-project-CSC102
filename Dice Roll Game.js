 //Player# is equal to corrisponding player#
 player1 = "Player1";
 player2 = "Player2";
 //Function to simulate dice roll
function rollTheDice() {
     //Get references to the dice image elements
     let diceNum1 = document.querySelector(".img1");
     let diceNum2 = document.querySelector(".img2");
     //change the dice images to a rolling animation
     diceNum1.setAttribute("src", "diceroll.gif")
     diceNum2.setAttribute("src", "diceroll.gif")
     //The h1 element is where the result will be displayed
     let result = document.querySelector('h1')
     //Clear any previous result text
     result.innerHTML = ""
     //Set a timeout to make a delay before showing the dice roll results
     setTimeout(() => {
         //Genreate random dice value
         let randomNumber1 = Math.floor(Math.random() * 6) + 1;
         let randomNumber2 = Math.floor(Math.random() * 6) + 1;

         diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
         diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

         //Determine the winner
         if (randomNumber1 === randomNumber2) {
             //If Player One and Two roll the same number, it's a draw
             result.innerHTML = "Draw!"
         }
         else if (randomNumber1 < randomNumber2) {
             //If player Two's roll is higher, Player Two wins
             result.innerHTML = (player2 + " WINS!");
         }
         else {
             //f player One's roll is higher, Player One wins
             result.innerHTML = (player1 + " WINS!");
         }

     }, 2500); //2.5-second delay before showing results
 }