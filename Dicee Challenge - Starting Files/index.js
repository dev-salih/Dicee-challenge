var randomNumber1 = Math.floor(Math.random()* 6);
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageResource1 = "images/" + randomImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageResource1)