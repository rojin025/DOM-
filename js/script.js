var p1Click = document.querySelector("#p1");
var p2Click = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winingScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var winScore = 5;
var gameOver = false;

p1Click.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    console.log(p1Score);
    if(p1Score === winScore) {
      gameOver = true;
      console.log("gameOver");
      p1Display.classList.add("winner");
    };
    p1Display.textContent = p1Score;

  };
});


p2Click.addEventListener("click", function() {
    if(!gameOver){
      p2Score++;
      p2Display.textContent = p2Score;
      console.log(p2Score);
      if(p2Score === winScore){
        gameOver = true;
        console.log("gameOver");
        p2Display.classList.add("winner");
      };
    };
  });

resetButton.addEventListener("click", function(){
  	reset();
  });

// function reset(){
//   p1Score = 0;
//   p2Score = 0;
//   console.log(p1Score , p2Score);
//
// };
