var Lis = document.querySelectorAll("li");

for(var i = 0 ; i < Lis.length ; i ++){
  Lis[i].addEventListener("mouseover", function(){
    this.style.color = "green";
  });
  Lis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
};
