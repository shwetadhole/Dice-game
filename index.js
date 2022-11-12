var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var ramdomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ramdomImage2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🏁 player 1 Won!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🏁 player 2 Won!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!!!";
}
