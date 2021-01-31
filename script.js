
var whoseTurn = 1;
var currentTurn = 1;

var playerDice1Roll;
var playerDice2Roll;

var player1Rolls=[];
var player2Rolls=[];
var orderSet = false;
var gameStarted = false;
var player2Started = false;
var gameOver=false;

  /*
    There are 2 players and players take turns.
    When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
    The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first.
    After both players have rolled, the player with the higher combined number wins.

      */

var main = function (input) {
  
  var myOutputValue;

      playerDice1Roll = rollDice();
      playerDice2Roll = rollDice();
    
    if (gameStarted ){
      if (currentTurn==1){

        player1Rolls.push(input);
      } else {
        player2Rolls.push(input);
      }
      
      orderSet = true;
    }
      
      //set whose turn
      if (whoseTurn==1){
        whoseTurn=2;
        currentTurn = 1;
        orderSet = false;
      }else if (whoseTurn==2){
        whoseTurn=1;
        currentTurn = 2;
        orderSet = false;
      }

      gameStarted=true;

      myOutputValue = 'Welcome Player '+currentTurn+'<br>You rolled '+playerDice1Roll+
      ' for Dice 1 and '+playerDice2Roll+' for Dice 2.<br>Choose the order of the dice.'
      +'<br> Player 1 rolls ' +player1Rolls+ '<br> Player 2 rolls '+player2Rolls+
      '<br> Outcome:'+checkWins();
      

      return myOutputValue;
  
};


var rollDice = function(){
  return parseInt((Math.random() * 6)+1);
}


var checkWins= function(){
   var lastPlayer1Throw = player1Rolls.length-1;
   var lastPlayer2Throw = player2Rolls.length-1;

   if (player1Rolls.length<1||player2Rolls.length<1){
    return "No outcome";
   }
   if (player1Rolls[lastPlayer1Throw] > player2Rolls[lastPlayer2Throw]){
     return "Player 1 wins";
   } else if (player1Rolls[lastPlayer1Throw] < player2Rolls[lastPlayer2Throw]){
    return "Player 2 wins";
  } else {
    return "No outcome";
  }
}
