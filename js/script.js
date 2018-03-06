var button = document.querySelector("button");
var iswhite = true;
button.addEventListener("click", function (){
    if( iswhite === true){
      document.body.style.background = "red";
      iswhite = false;
    } else {
      document.body.style.background = "white";
      iswhite = true;
    }
  });
